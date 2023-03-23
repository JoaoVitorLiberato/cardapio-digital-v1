<template>
  <v-container 
    fluid
    class="pt-0"
  >
    <v-row no-gutters>
      <v-col cols="12">
        <v-row
          align="center"
          justify="center"
        >
          <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
            <v-carousel
              cycle
              :height="$vuetify.breakpoint.mdAndUp? 600 : 300"
              hide-delimiter-background
              show-arrows-on-hover
              interval="4000"
            >
              <a href="https://storyset.com/online" target="_blank">
              <v-carousel-item v-for="(slide, i) in 
                  [
                    { src: '/img/carrocel-login/login-1.svg' },
                    { src: '/img/carrocel-login/login-2.svg' },
                    { src: '/img/carrocel-login/login-3.svg' },
                    { src: '/img/carrocel-login/login-4.svg' },
                    { src: '/img/carrocel-login/login-5.svg' },
                ]" 
                :key="`carrossel-images-login-${i}`"
              >
                <v-sheet>
                  <v-row>
                    <img :src="slide.src" alt="Online illustrations by Storyset">
                  </v-row>
                </v-sheet>
              </v-carousel-item>
              </a>
            </v-carousel>
          </v-col>
          <v-col 
            :cols="$vuetify.breakpoint.smAndDown ? 12 : 4"
            :class="$vuetify.breakpoint.smAndDown ? 'mt-6' : 'ml-4'"
          >
            <h2 
              class="text-uppercase font-weight-bold mb-5"
              v-text="'Login'"
            />
            <v-form
              @submit.prevent="handleLogin"
            >
              <v-text-field
                v-model="form.email"
                label="Email"
                :rules="[rules.required, rules.email]"
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
                  to="/forgot-password"
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
                    width="100%"
                    color="secondary"
                    x-large
                    py-5
                    @click="() => dialog = true"
                  >
                    <span
                      class="white--text"
                      v-text="'Cadastrar'"
                    />
                  </v-btn>
                </v-flex>
                <v-dialog
                  v-model="dialog"
                  max-width="500"
                >
                  <v-card
                    width="100%"
                    height="auto"
                    class="px-5"
                  >
                    <v-card-title>
                      Registrar
                    </v-card-title>

                    <v-btn 
                      width="100%"
                      color="primary"
                      x-large
                      :to="{name: 'register'}"
                      class="my-4"
                    >
                      <span
                        class="white--text"
                        v-text="'Com Email e Senha'"
                      />
                    </v-btn>
                    <v-btn 
                      width="100%"
                      color="primary"
                      x-large
                      class="my-5"
                    >
                      <span
                        class="white--text"
                        v-text="'Com conta Google'"
                      />
                    </v-btn>

                    <v-spacer />
                      <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="() => dialog = false"
                      >
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-card>

                </v-dialog>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import "@/assets/styles/views/publicViews/login.styl"


  @Component({})

  export default class LoginView extends mixins() {

    form = {
      email: '',
      password: ''
    }

    show = false
    loading = false
    dialog = false

    rules = {
      email: v => /.+@.+/.test(v) || 'Este email não é válido.',
      required: value => !!value || 'Obrigatório.',
      min: v => v.length >= 8 || 'A senha deve conter no minimo 8 characters'
    }

    async handleLogin () {
      try{
        this.loading = true
        const PAYLOAD_DATA = require("@/data/fieldsGlobal/fieldsGlobal.json")

        if (this.form) {
          Vue.set(PAYLOAD_DATA, "email", this.form.email)
          Vue.set(PAYLOAD_DATA, "password", this.form.password)
        }

        this.$store.dispatch("setSavedDataUserLogin", PAYLOAD_DATA)

        setTimeout(() => {
          this.loading = false
          this.$router.push({ name: 'me' })
        }, 1500)

      } catch (error) {
        this.loading = false
        console.log(error)
      }
    }

  }
</script>
