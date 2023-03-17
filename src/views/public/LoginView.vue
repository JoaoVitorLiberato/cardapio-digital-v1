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
              v-font-size="$vuetify.breakpoint.xsOnly ? 12 : 30"
              class="text-uppercase font-weight-bold mb-5"
              v-text="'Login'"
            />
            <v-form>
              <v-text-field
                v-model="form.email"
                :error-messages="emailErrors"
                label="Email"
                :rules="rules.emailRules"
                outlined
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              />
             <v-text-field
                v-model="form.senha"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                label="Senha"
                outlined
                @click:append="show = !show"
              />
              <v-row>
                <v-flex
                  :cols="$vuetify.breakpoint.smAndDown ? 6 : 12"
                  class="ml-3 mt-5"
                >
                  <v-btn 
                    :disable="form.email === ''||form.senha ===''"
                    type="submit"
                    color="primary"
                    large
                    v-text="'Login'"
                  />
                  <v-spacer />
                  <v-btn 
                    :disable="form.email === ''||form.senha ===''"
                    type="submit"
                    color="primary"
                    large
                    v-text="'Login'"
                  />

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
          senha: ''
        },
        show: false,
          rules: {
            emailRules: [
              v => !!v || 'Obrigatório',
              v => /.+@.+/.test(v) || 'Este email não é válido.'
            ],
            required: value => !!value || 'Obrigatório.',
            min: v => v.length >= 8 || 'Minino 8 characters',
        },
      };
    },
  };
</script>
