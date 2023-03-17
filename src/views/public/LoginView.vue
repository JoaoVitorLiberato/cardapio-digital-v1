<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-row
          :wrap="$vuetify.breakpoint.smAndDown"
          align="center"
          justify="center"
        >
          <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 7">
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <a href="https://storyset.com/online" target="_blank">
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet>
                  <v-row>
                    <img :src="slide.src" alt="Online illustrations by Storyset">
                  </v-row>
                </v-sheet>
              </v-carousel-item>
              </a>
            </v-carousel>
          </v-col>
          <v-col :cols="$vuetify.breakpoint.xsOnly ? 12 : 5" fill-height>
            <h2 
              class="text-uppercase font-weight-bold mb-5"
              v-text="'Login'"
            />
            <v-form>
              <v-text-field
                v-model="form.email"
                label="Email"
                :rules="rules.emailRules"
                outlined
                required
              />
             <v-text-field
                v-model="form.password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                label="Senha"
                outlined
                @click:append="show = !show"
              />
              <div
                class="container__esqueceu"
              >
                <router-link 
                  to="/login"
                >
                  Esqueceu sua senha?
                </router-link>
              </div>
              <v-row
                class="px-2"
                wrap
              >
                <v-flex
                  xs12
                  py-5
                >
                  <v-btn 
                    :disabled="form.email === ''|| form.senha ===''"
                    type="submit"
                    width="100%"
                    color="primary"
                    x-large
                    @click.prevent ="handleLogin"
                  >
                    <v-progress-circular
                      v-if="loading"
                      indeterminate
                      color="white"
                    />

                    <span
                      v-else
                      class="white--text"
                      v-text="'login'"
                    />
                
                  </v-btn>
                  
                </v-flex>
                <v-flex
                  xs12
                  mb-4
                >
                  <v-btn 
                    :disable="form.email === ''||form.password ===''"
                    type="submit"
                    width="100%"
                    color="secondary"
                    x-large
                  >
                    <span
                      class="white--text"
                      v-text="'Cadastrar'"
                    />
                  </v-btn>
                </v-flex>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import userAuthUser from "@/middlewares/UseAuthUser";
  import "@/assets/styles/views/publicViews/login.styl"
  
  export default {
    name: "LoginView",
    data() {
      return {
        slides: [
          {
            src:"/img/carrocel-login/menu-1.svg"
          },
          {
            src:"/img/carrocel-login/menu-2.svg"
          },
          {
            src:"/img/carrocel-login/menu-3.svg"
          },
          {
            src:"/img/carrocel-login/menu-4.svg"
          },
        ],
        form: {
          email: '',
          password: ''
        },
        show: false,
        rules: {
          emailRules: [
            v => !!v || 'Obrigatório',
            v => /.+@.+/.test(v) || 'Este email não é válido.'
          ],
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 8 || 'A senha deve conter no minimo 8 characters',
        },
        loading: false,
      };
    },
    methods: {
      async handleLogin () {
        this.loading = true
        try {
          const { login } = userAuthUser()
          await login(this.form)
          console.log("Login efetuado com sucesso!")
          this.loading = false
          this.$router.replace({ name: "me"})
        } catch (error) {
          this.loading = false
          console.log(error)
        }
      }
    }
  };
</script>
