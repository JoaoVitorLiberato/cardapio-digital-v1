<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
      >
        <v-row>
          <v-col
            :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'"
          >
            <a href="https://storyset.com/business" target="_blank">
              <img src="/img/contact/contact.svg" alt="Business illustrations by Storyset">
            </a>
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.mdAndUp ? '6' : '12'"
          >
            <v-row
              class="mt-4"
            >
              <v-col
                cols="12"
              >
                <h2
                  class="text-uppercase"
                >
                  Como podemos ajudar voce?
                </h2>
                <p>
                  O botão de enviar irá aparecer após você completar todos os campos.
                </p>
              </v-col>
              <v-col
                cols="12"
              >
                <v-form
                  @submit.prevent="sendContact"
                >
                  <v-row
                    class="px-2"
                  >
                    <v-col
                      cols="12 pa-0"
                    > 
                      <v-text-field
                        v-model="form.nome"
                        label="Nome Completo"
                        placeholder="Informe seu nome completo"
                        outlined
                        required
                      />
                    </v-col>
                    <v-col
                      cols="12 pa-0"
                    > 
                      <v-text-field
                        v-model="form.email"
                        label="Email"
                        placeholder="Informe seu email"
                        outlined
                        required
                      />
                    </v-col>
                    <v-col
                      cols="12 pa-0"
                    > 
                    <v-textarea
                      v-model="form.messagem"
                      label="Mensagem"
                      placeholder="Conte-nos o que houve para podermos resolver o mais rápido possivel. Por favor, tente ser o mais claro possivel: ex: bug no login ou problema com o produto tal de tal empresa."
                      auto-grow
                      outlined
                    />
                    </v-col>
                    <v-col
                      cols="12 pa-0"
                    > 
                      <v-btn
                        type="submit"
                        color="#90CAF9"
                        dark
                        :large="$vuetify.breakpoint.mdAndUp"
                        :width="$vuetify.breakpoint.xsOnly? '100%' : ''"
                        :disabled="form.nome === '' || form.email === ''  || form.messagem === ''"
                      >
                        <v-progress-circular
                          v-if="loading"
                          indeterminate
                          size="20"
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
                      v-if="loading"
                      class="mt-3"
                      cols="12 pa-0"
                    > 
                      <v-alert
                        v-if="statusError"
                        type="error"
                      >
                        deu errado
                      </v-alert>
                      <v-alert
                        v-else
                        type="success"
                      >
                        deu certo
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
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import supabase from "@/api/supabase"

  @Component({})

  export default class ContactView extends mixins() {
    
    form = {
      nome: "",
      email: "",
      messagem: ""
    }

    loading = false
    statusMsg = ""
    statusError = false

    async sendContact() {
      this.loading = true
      const { error } = await supabase.from("contact-public").insert(this.form)

      if(error) {
        setTimeout(() => {
          this.loading = false
        }, 5000)
        this.statusError = true
        this.statusMsg = `
          Houve algum problema no envio da sua mensagem, por favor, 
          entre em contato com nossa equipe de desenvolvimento
        `
      }

      setTimeout(() => {
        this.loading = false
      }, 3000)
      this.statusMsg = `
        Sua menssagem foi enviada com sucesso, tentaremos resolver seu problema o mais rápido
        possível. Ass: Equipe técnica.
      `
    }

  }
</script>