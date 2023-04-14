<template>
<v-container
  class="mt-12"
>
  <v-row
    no-gutters
    justify="center"
    align="center"
  >
    <v-col
      cols="12"
    >
      <v-row
        :style="$vuetify.breakpoint.mdAndUp ? 'display:flex;flex-direction:row-reverse': ''"
      >
        <v-col
          :cols="$vuetify.breakpoint.smAndDown ? '12' : '6' "
        >
          <video
            autoplay
            loop
            width="100%"
          >
            <source
              src="/videos/Problem.mp4"
              type="video/mp4"
            >
            <a href="https://storyset.com/people">People illustrations by Storyset</a>
          </video>
        </v-col>
        <v-col
          :cols="$vuetify.breakpoint.smAndDown ? '12' : '6'"
          class="mt-5"
        >
        <v-row>
          <v-col
            cols="12"
          >
            <h1>
              Como podemos ajudar ?
            </h1>
            <p>
              Nossa equipe está aqui para tentar solucionar seu problemas com bugs que podem ocorrer
              com o sistema., Então pedimos para que você tente ser mais especifico quando 
              tiver relatando o problema para que nossa equipe possa indentificar onde possa está e 
              resolve-lo de forma mais rápida possivel.
            </p>
          </v-col>
          <v-col
            cols="12"
          >
            <v-form>
              <v-row>
                <v-col
                  cols="12"
                >
                  <h2>
                    Descreva no campo abaixo
                  </h2>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-textarea
                    v-model="description"
                    auto-grow
                    outlined
                  />
                </v-col>
                <v-col
                  cols="12 py-0"
                >
                  <v-btn
                    color="#EB310CBF"
                    x-large
                    dark
                    :width="$vuetify.breakpoint.xsOnly ? '100%' : '250'"
                    :disabled="description === '' || description.length <= 15"
                    @click="handleSendProblemDesciption"
                  >
                    <v-progress-circular
                      v-if="loading"
                      indeterminate
                      color="white"
                    />
                    <span
                      v-else
                      class="font-weight-bold"
                      v-text="'Enviar'"
                    />
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-alert
                    v-if="statusMsg === 201"
                    color="green"
                    dark
                    icon="mdi-check-circle"
                    transition="scale-transition"
                  >
                    Mensagem foi enviada com sucesso, Faremos o possivel para resolver o mais rápido possivel. 
                  </v-alert>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-alert
                    v-if="statusMsg === 403"
                    color="red"
                    dark
                    icon="mdi-message-alert"
                    transition="scale-transition"
                  >
                    Houve algun erro ao enviar a sua messagem, por favor, tente novamente mais tarde.
                  </v-alert>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  import supabase from "@/api/supabase"
  import { mixins } from "vue-class-component"
  import { Component } from "vue-property-decorator"

  @Component({})

  export default class Complaints extends mixins() {
    
    description = ""
    loading = false
    statusMsg = 0

    async handleSendProblemDesciption() {
      this.loading = true
      const { status } =  await supabase.from("problem_client").insert({
        email: this.$store.state.user.email,
        description: this.description,
        user_id: this.$store.state.user.id
      })
    
      this.statusMsg = status

      setTimeout(() => {
        this.loading = false
        this.$router.push({name: "me" })
      }, 1800)
    }

  }
</script>