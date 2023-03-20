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
                    width="100%"
                    v-model="password"
                    label="Nova senha"
                    :rules="[rules.required, rules.min]"
                    outlined
                    required
                  />
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
  export default {
    name: 'ResetPassword',
    data() {
      return {
        password: '',
        rules: {
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 8 || 'A senha deve conter no minimo 8 characters',
        },
      }
    },
    methods: {
      async resetPassword() {
        const { resetPassword } = userAuthUser()

        try {
          await resetPassword(this.password)
          alert("Senha alterada com sucesso!")
          this.$router.push({ name: 'login'})
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>