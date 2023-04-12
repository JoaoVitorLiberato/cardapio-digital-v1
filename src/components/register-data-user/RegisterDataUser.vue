<template>
  <v-dialog
    v-model="isOpen"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    class="fix-scroll-dialog"
  >
    <v-stepper
      v-model="step"
      flat
    >
      <v-stepper-header>
        <v-stepper-step
          :complete="step > 1"
          step="1"
        >
          Dados pessoais do cliente
        </v-stepper-step>

        <v-divider />
        <v-stepper-step
          :complete="step > 2"
          step="2"
        >
          Dados de sua empresa
        </v-stepper-step>
        
        <v-divider />
        <v-stepper-step
          step="3"
        >
          Concluido
        </v-stepper-step>
      </v-stepper-header>


      <!--1-->
      <v-stepper-content 
        step="1"
        class="pa-0"
      >
        <v-card 
          class="my-2"
          style="border:none"
          flat
          hover
        >
          <v-row
            class="d-flex  justify-space-between px-3"
          >
            <v-col
              :cols="$vuetify.breakpoint.xsOnly ? '12': '6'"
            >
              <a>
                <img src="/img/register-data-user/pessoal.svg" 
                  alt="Online illustrations by Storyset"
                  width="100%"
                  height="100%"
                >
              </a>
            </v-col>
            <v-col
              :cols="$vuetify.breakpoint.xsOnly ? '12': '6'"
            >
              <v-form
                @submit.prevent=""
                class="px-3"
              >
                <v-row>
                  <v-col
                    cols="12 pa-0"
                  >
                    <p> 
                      Vamos lá? Agora vamos cadastrar alguns dados!
                    </p>
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="formClient.cpf"
                      v-mask="'###.###.###-##'"
                      label="CPF"
                      class="my-0"
                      placeholder="Digite seu CPF"
                      :rules="[rules.required, rules.validateCpf]"
                      outlined
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="formClient.primeiroNome"
                      label="Primeiro nome"
                      placeholder="Digite seu primeiro nome"
                      :rules="[rules.required]"
                      outlined
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="formClient.sobrenome"
                      label="Sobrenome"
                      placeholder="Digite seu primeiro nome"
                      :rules="[rules.required]"
                      outlined
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="formClient.wattsapp"
                      label="Telefone / Wattsapp"
                      v-mask="'(##) # ####-####'"
                      placeholder="Informe seu telefone / Wattsapp"
                      :rules="[rules.required]"
                      outlined
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                  <v-textarea
                      v-model="formClient.text"
                      label="Messagem padrão"
                      placeholder="Opcional: Escreva um texto padrão para ser enviado no seu wattsapp caso ele se interesse pelo seu produto."
                      auto-grow
                      outlined
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                  <v-checkbox
                      @click="() => dialogClient = true"
                      v-model="formClient.termoDeUso"
                      :checked="formClient.termoDeUso"
                      label="Aceitar termos de uso"
                      class="text-uppercase my-3"
                      style="margin-top:0; padding:0"
                      :rules="[rules.required]"
                    />
                    <v-dialog
                      v-model="dialogClient"
                      width="500"
                    >
                      <v-card>
                        <v-card-title class="text-h5 grey lighten-2 text-uppercase">
                          Termos de Uso
                        </v-card-title>

                        <v-card-text
                          class="mt-5"
                        >
                          <span 
                            v-text="'O senhor(a) autoriza o armazanamento dos seus dados pessoais em nosso bando de dados?'"
                          />
                        </v-card-text>
                          
                        <v-divider />

                        <v-card-actions>
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
                  </v-col>
                  <v-col
                    class="mb-4"
                    cols="12 pa-0"
                  >
                    <v-row
                      no-gutters
                    >
                      <v-col
                        cols="12"
                        class="d-flex flex-xs-column justify-space-between mt-4"
                      >
                        <v-btn 
                          x-large
                          color="error"
                          @click="$emit('closeDialogRegisterAlldata')"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          x-large
                          color="primary"
                          :disabled="
                            formClient.cpf === '' ||
                            formClient.primeiroNome === '' ||
                            formClient.sobrenome === '' ||
                            formClient.wattsapp === '' ||
                            formClient.text === '' ||
                            formClient.termoDeUso === false
                          "
                          @click="handleDataClient"
                        > 
                          <v-progress-circular
                            v-if="loading"
                            indeterminate
                            color="white"
                          />

                          <span
                            v-else
                            class="white--text"
                            v-text="'Continue'"
                          />
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-stepper-content>


      <!--2-->
      <v-stepper-content 
        step="2"
      >
        <v-card 
          class="my-2"
          style="border:none"
          flat
          hover
        >
          <v-row
            class="d-flex  justify-space-between"
          >
            <v-col
              :cols="$vuetify.breakpoint.xsOnly ? '12': '6'"
            >
              <a>
                <img src="/img/register-data-user/second.svg" 
                  alt="Online illustrations by Storyset"
                  width="100%"
                  height="100%"
                >
              </a>
            </v-col>
            <v-col
              :cols="$vuetify.breakpoint.xsOnly ? '12': '6'"
            >
              <v-form
                @submit.prevent=""
                class="px-3"
              >
                <v-row>
                  <v-col
                    cols="12 pa-0"
                  >
                    <p> 
                      Segunda passo, Vamos nessa concluir seu cadastro.
                    </p>
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="formCompany.cnpj"
                      label="CNPJ"
                      v-mask="'##.###.###/####-##'"
                      class="my-0"
                      placeholder="Digite seu CNPJ"
                      :rules="[rules.required]"
                      outlined
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="formCompany.nome"
                      label="Nome da Empresa"
                      placeholder="Digite da sua empresa"
                      :rules="[rules.required]"
                      outlined
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="searchCep"
                      v-mask="'#####-###'"
                      placeholder="Informe seu CEP"
                      :rules="[rules.required]"
                      outlined
                      required
                      append-icon="mdi-magnify"
                      @click:append="handleCep"
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      :value="formCompany.endereco"
                      label="Endereço"
                      :rules="[rules.required]"
                      outlined
                      required
                      disabled
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      :value="formCompany.bairro"
                      label="Bairro"
                      :rules="[rules.required]"
                      outlined
                      required
                      disabled
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-row
                      class="d-flex flex-xs-column justify-space-between"
                    >
                      <v-col
                        cols="7"
                      >
                        <v-text-field
                          :value="formCompany.cidade"
                          label="Cidade"
                          :rules="[rules.required]"
                          outlined
                          required
                          disabled
                        />

                      </v-col>
                      <v-col
                        cols="4"
                      >
                        <v-text-field
                          :value="formCompany.uf"
                          label="UF"
                          :rules="[rules.required]"
                          outlined
                          required
                          disabled
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="formCompany.numero"
                      label="Numero"
                      :rules="[rules.required]"
                      outlined
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="formCompany.complemento"
                      label="complememto"
                      :rules="[rules.required]"
                      outlined
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                  <v-checkbox
                      @click="() => dialogCompany = true"
                      v-model="formCompany.autorizacaoPublic"
                      :checked="formCompany.autorizacaoPublic"
                      label="Aceito autorização de dados publicos"
                      class="text-uppercase my-3"
                      style="margin-top:0; padding:0"
                      :rules="[rules.required]"
                    />
                    <v-dialog
                      v-model="dialogCompany"
                      width="500"
                    >
                      <v-card>
                        <v-card-title class="text-h5 grey lighten-2 text-uppercase">
                          Termos de exibição de dados
                        </v-card-title>

                        <v-card-text
                          class="mt-5"
                        >
                          <span 
                            v-text="'O senhor(a) autoriza o armazanamento dos dados em nosso bando de dados e deixa-los publicos para que os clientes possa ve-los??'"
                          />
                        </v-card-text>
                          
                        <v-divider />

                        <v-card-actions>
                          <v-btn
                            color="primary"
                            text
                            @click.prevent="handleTermosDeDados"
                          >
                            Sim
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                  <v-col
                    class="mb-4"
                    cols="12 pa-0"
                  >
                    <v-row
                      no-gutters
                    >
                      <v-col
                        cols="12"
                        class="d-flex flex-xs-column justify-space-between"
                      >
                        <v-btn 
                          large
                          color="secondary"
                          @click="step = 1"
                        >
                          Voltar
                        </v-btn>
                        <v-btn
                          large
                          color="primary"
                          @click="handleDataCompany"
                        >
                          <v-progress-circular
                              v-if="loading"
                              indeterminate
                              color="white"
                            />

                            <span
                              v-else
                              class="white--text"
                              v-text="'Continue'"
                            />
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-stepper-content>


      <!--3-->
      <v-stepper-content 
        step="3"
      >
        <v-card 
          class="my-2"
          style="border:none"
          flat
          hover
        >
          <v-row
            class="d-flex  justify-space-between align-center"
          >
            <v-col
              :cols="$vuetify.breakpoint.xsOnly ? '12': '6'"
            >
              <a>
                <img src="/img/register-data-user/complete.svg" 
                  alt="Online illustrations by Storyset"
                  width="100%"
                  height="100%"
                >
              </a>
            </v-col>
            <v-col
              :cols="$vuetify.breakpoint.xsOnly ? '12': '6'"
            >
              <v-row
                class="px-3"
              >
                <v-col
                  class="mb-4"
                  cols="12"
                >
                  <span
                    class="font-weight-bold"
                    style="font-size:22px"
                    v-text="'Cadastro concluido com sucesso!'"
                  /> 
                  

                  <v-btn
                    large
                    color="primary"
                    @click.prevent="$emit('closeDialogRegisterAlldata')"
                    width="100%"
                  >
                    <span
                      v-text="'Fechar'"
                    /> 
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-stepper-content>
    </v-stepper>
  </v-dialog>
</template>

<script>
  import { Component, Prop, Emit, Vue } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import { searchCep } from "@/middlewares/viaCep"
  import "@/assets/styles/components/dialogRegisterAllDatauser.styl"
  import { validarCPF } from "@/helpers/validateCpf"
  import useBD from "@/middlewares/useBD"
  import store from "@/plugins/store"

  const { list, post } = useBD()

  
  @Component({})

  export default class RegisterDataUSer extends mixins() {

    @Prop({ default: false}) isOpen
    @Emit('closeDialogRegisterAlldata')

    step = 1
    getUSer = null
    show = false
    dialogClient= false
    dialogCompany= false
    searchCep = ""
    loading = false

    formClient = {
      cpf: "",
      primeiroNome: "",
      sobrenome: "",
      wattsapp: "",
      text: "",
      termoDeUso: false,
    }

    formCompany = {
      nome: "",
      cnpj: "",
      cep: "",
      endereco: "",
      bairro: "",
      cidade: "",
      uf: "",
      numero: "",
      complemento: "",
      autorizacaoPublic: false
    }

    rules = {
      email: v => /.+@.+/.test(v) || 'Este email não é válido.',
      required: value => !!value || 'Obrigatório.',
      min: v => v.length >= 8 || 'A senha deve conter no minimo 8 characters',
      validateCpf: () => {
        const cpf = this.formClient.cpf.replace(/\D/g,"")
        const validate = validarCPF(cpf)
        if(validate === false) {
          return "CPF invlálido"
        } 
        return true
      }
    }

    mounted () {
      const clientRegisted = async () => {
        const client = await list("client")
        if(client) {
          
        const clientFiltered = client.find(item =>  {
          return item.user_id === this.$store.getters.getUser.id
        });

          if (clientFiltered) {
            this.step = 2
          }
        }
      }

      clientRegisted()
    }

    handleTermosDeUso  () {
      this.formClient.termoDeUso = true;
      this.dialogClient = false
    }

    handleTermosDeDados  () {
      this.formCompany.autorizacaoPublic= true;
      this.dialogCompany = false
    }


    async handleDataClient () {
      const PAYLOAD_DATA = require("@/data/client/client.json");
      this.loading = true

      if(this.formClient) {
        Vue.set(PAYLOAD_DATA, "cpf", this.formClient.cpf.replace(/\D/g,""))
        Vue.set(PAYLOAD_DATA, "primeiroNome", this.formClient.primeiroNome)
        Vue.set(PAYLOAD_DATA, "sobrenome", this.formClient.sobrenome)
        Vue.set(PAYLOAD_DATA, "wattsapp", `+55${this.formClient.wattsapp.replace(/\D/g,"")}`)
        Vue.set(PAYLOAD_DATA, "text", this.formClient.text)
        Vue.set(PAYLOAD_DATA, "termoDeUso", this.formClient.termoDeUso)
      }

      try { 
        store.dispatch("setDataClient", PAYLOAD_DATA)

        if(store.getters.getClient) {
          await post("client", store.getters.getClient)
        }

        setTimeout(() => {
          this.loading = false
          this.step = 2
        }, 1400)
      } catch (error) {
        this.loading = false
        console.error(error)
      }
    }

    async handleCep() {
      const response = await searchCep(this.searchCep)

      if(response) {
        this.formCompany.cep = response.cep
        this.formCompany.endereco = response.logradouro
        this.formCompany.bairro = response.bairro
        this.formCompany.cidade = response.localidade
        this.formCompany.uf = response.uf
        return;
      }

      return console.log("Error ao buscar seu endereço")
    }

    async handleDataCompany () {
      this.loading = true
      const PAYLOAD_DATA = require("@/data/company/dataCompany.json")

      if(this.formCompany) {
        Vue.set(PAYLOAD_DATA, "nome", this.formCompany.nome)
        Vue.set(PAYLOAD_DATA, "cnpj",  this.formCompany.cnpj)
        Vue.set(PAYLOAD_DATA, "cep", this.formCompany.cep)
        Vue.set(PAYLOAD_DATA, "endereco", this.formCompany.endereco)
        Vue.set(PAYLOAD_DATA, "bairro", this.formCompany.bairro)
        Vue.set(PAYLOAD_DATA, "cidade", this.formCompany.cidade)
        Vue.set(PAYLOAD_DATA, "uf", this.formCompany.uf)
        Vue.set(PAYLOAD_DATA, "numero", this.formCompany.numero)
        Vue.set(PAYLOAD_DATA, "complemento", this.formCompany.complemento)
        Vue.set(PAYLOAD_DATA, "autorizacaoPublicData", this.formCompany.autorizacaoPublic)
      }

      try {
        store.dispatch("setDataCompany", PAYLOAD_DATA)

        if(store.getters.getCompany) {
          await post("company", store.getters.getCompany)
        }

        setTimeout(() => {
          this.loading = false
          this.step = 3
        }, 1400) 
      } catch (error) {
        this.loading = false
        console.error(error)
      }
    }   
  }

</script>