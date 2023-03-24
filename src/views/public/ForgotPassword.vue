<template>
  <v-container>
    <v-row
      no-gutters
    >
      <v-col
        cols="12"
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col
            :cols="$vuetify.breakpoint.smAndDown? '12': '6'"
            class="mr-5"
          >
            <a href="https://storyset.com/online">
              <img
              src="/img/forgot-password/forgot-img.svg"
              alt="Online illustrations by Storyset"
              >
            </a>
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.smAndDown? '12': '5'"
          >
            <v-form @submit.prevent="sendEmail">
              <v-row>
                <v-col
                  cols="12"
                >
                  <h2
                    class="text-uppercase"
                  >
                    Esqueci minha senha
                  </h2>
                  <p>
                    Digite o email da sua conta cadastrada para ser enviado um email de troca de senha.
                  </p>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    width="100%"
                    v-model="email"
                    label="Email"
                    :rules="[rules.required, rules.email]"
                    outlined
                    required
                  />
                </v-col>
                <v-col
                v-if="loading"
                  cols="12"
                >
                  <v-alert
                    prominent
                    rounded
                    dense
                    text
                    type="success"
                    
                  >
                    Email enviado para {{ email }} com sucesso.
                  </v-alert>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-btn
                    type="submit"
                    color="primary"
                    width="100%"
                    x-large
                    :disabled="email === '' || email.length < 8"
                  >
                    <v-progress-circular
                      v-if="loading"
                      indeterminate
                      color="white"
                    />

                    <span 
                      v-else
                      v-text="'Enviar para seu Email'"
                    />
                  </v-btn>
                  <v-btn
                    class="mt-5"
                    color="secondary"
                    width="100%"
                    :to="{ name: 'login' }"
                    x-large
                  >
                    <span 
                      v-text="'Voltar para Login'"
                    />
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import userAuthUser from '@/middlewares/UseAuthUser'
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({})

  export default class ForgoutPasswordComponent extends mixins() {
    email = ""
    loading = false
    msg = ""
    rules = {
      email: v => /.+@.+/.test(v) || 'Este email não é válido.',
      required: value => !!value || 'Obrigatório.',
    }

    async sendEmail() {
      const { sendPasswordRestEmail } = userAuthUser()
      this.loading = true
      try {
        await sendPasswordRestEmail(this.email)
        setTimeout(() => {
          this.loading = false
          this.$router.push({ name: "login"})
        }, 1500)

      } catch (error) {
        console.log(error)
      }
    }
  }
</script>