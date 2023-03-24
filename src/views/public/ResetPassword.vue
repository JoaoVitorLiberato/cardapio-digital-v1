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
              src="/img/reset-password/reset-img.svg"
              alt="Online illustrations by Storyset"
              >
            </a>
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.smAndDown? '12': '5'"
          >
            <v-form @submit.prevent="resetPassword">
              <v-row>
                <v-col
                  cols="12"
                >
                  <h2
                    class="text-uppercase"
                  >
                    Reset minha senha
                  </h2>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show ? 'text' : 'password'"
                    label="Senha"
                    outlined
                    @click:append="show = !show"
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
                    Sua senha foi alterada com sucesso.
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
                    :disabled="password === '' || password.length < 7"
                  >
                    <span 
                      v-text="'Enviar para seu Email'"
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
  import { mixins } from "vue-class-component"
  import { Component } from "vue-property-decorator"

  @Component({})

  export default class ResetPassword extends mixins() {
    password = ''
    show= false
    loading= false
    rules = {
      required: value => !!value || 'Obrigatório.',
      min: v => v.length >= 8 || 'A senha deve conter no minimo 8 characters',
    }

    async resetPassword() {
      const { resetPassword } = userAuthUser()
      this.loading = true
      try {
        await resetPassword(this.password)

        setTimeout(() => {
          this.loading = false
          this.$router.push({ name: 'login'})
        }, 1500)
      } catch (error) {
        this.loading = false
        console.log(error)
      }
    }
  }
</script>