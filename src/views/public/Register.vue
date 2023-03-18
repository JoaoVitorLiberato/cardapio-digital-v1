<template>
  <v-container 
    fluid
  >
    <v-row
      no-gutters
    >
      <v-flex
        cols="12"
      >
        <v-row
          :wrap="$vuetify.breakpoint.smAndDown"
        >
          <v-col
            :cols="$vuetify.breakpoint.smAndDown ? '12' : '7'"
          > 
            <a href="https://storyset.com/phone">
              <v-img 
                src="/img/imagem-signup/imagem-signup.svg"
                alt="Phone illustrations by Storyset"
                :height="$vuetify.breakpoint.xsOnly ? 425 : 608"
              />
            </a>
          </v-col>
          <v-col
           :cols="$vuetify.breakpoint.smAndDown ? '12' : '4'"
          >
            <v-form
              :style="$vuetify.breakpoint.smAndDown ? 'padding:0px 8px;' :''"
            >
              <v-row
                class="d-flex flex-column"
              >
                <v-flex
                  cols="12"
                >
                  <h2
                    class="font-weight-bold mb-4"
                  >
                    Registro de dados
                  </h2>
                </v-flex>
                <v-flex
                  cols="12"
                >
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    :rules="[rules.required, rules.email]"
                    outlined
                    required
                  />
                </v-flex>
                <v-flex
                  cols="12"
                >
                  <v-text-field
                    v-model="form.password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show ? 'text' : 'password'"
                    label="Senha"
                    outlined
                    @click:append="show = !show"
                  />
                </v-flex>
                <v-flex
                  cols="12"
                >
                  <v-checkbox
                    @click="() => dialog = true"
                    v-model="form.termoDeUso"
                    :checked="form.termoDeUso"
                    label="Aceitar termos de uso"
                    class="text-uppercase"
                    style="margin-top:0; padding:0"
                    :rules="[rules.required]"
                  />
                </v-flex>
                <v-flex
                  cols="12"
                  class="my-3"
                >
                  <v-btn
                    color="primary"
                    x-large
                    width="100%"
                    :disabled="form.email === '' || form.password === '' || form.termoDeUso === false"
                    @click.prevent="handleRegister"
                  >
                    <v-progress-circular
                      v-if="loading"
                      indeterminate
                      color="white"
                    />

                    <span
                      v-else
                      class="white--text"
                      v-text="'Registrar'"
                    />
                  </v-btn>
                </v-flex>
                <v-flex
                  cols="12"
                  class="my-3"
                >
                  <v-btn
                    color="secondary"
                    x-large
                    width="100%"
                    to="/login"
                  >
                    voltar
                  </v-btn>
                </v-flex>
              </v-row>
            </v-form>
          </v-col>
        </v-row> 
      </v-flex>
      <v-dialog
        v-model="dialog"
        persistent
        width="500"
      >
        <v-card>
          <v-card-title class="text-h5 grey lighten-2 text-uppercase">
            Termos de Uso
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="handleTermosDeUso"
            >
              Eu aceito
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
  import userAuthUser from "@/middlewares/UseAuthUser";
  import "@/assets/styles/views/publicViews/login.styl"
  
  export default {
    name: "RegisterView",
    data() {
      return {
        form: {
          email: '',
          password: '',
          termoDeUso: false
        },
        show: false,
        rules: {
          email: v => /.+@.+/.test(v) || 'Este email não é válido.',
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 8 || 'A senha deve conter no minimo 8 characters',
        },
        loading: false,
        dialog: false,
      }
    },
    methods: {
      handleTermosDeUso  () {
        this.form.termoDeUso = true;
        this.dialog = false
      },

      async handleRegister () {
        const { register } = userAuthUser()

        try {
          this.loading = true
          await register(this.form)
          this.loading = false
          this.$router.push({
            name: "email-confirmation",
            query: { email: this.form.email}
          })
        } catch (error) {
          console.log(error.message)
        }
      }

    }
  };
</script>
