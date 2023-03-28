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
          Dados Pessoais
        </v-stepper-step>

        <v-divider />
        <v-stepper-step
          :complete="step > 2"
          step="2"
        >
          Dados da Empresa
        </v-stepper-step>
        
        <v-divider />
        <v-stepper-step
          step="3"
        >
          Concluido
        </v-stepper-step>
      </v-stepper-header>

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
                      v-model="form.data.cliente.cpf"
                      v-mask="'###.###.###-##'"
                      label="CPF"
                      class="my-0"
                      placeholder="Digite seu CPF"
                      :rules="[rules.required]"
                      outlined
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="form.data.cliente.primeiroNome"
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
                      v-model="form.data.cliente.sobrenome"
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
                      v-model="form.data.cliente.wattsapp"
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
                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      :rules="[rules.required, rules.email]"
                      outlined
                      required
                      disabled
                    />
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="form.password"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show ? 'text' : 'password'"
                      label="Senha"
                      placeholder="Digite a mesma senha do login"
                      outlined
                      @click:append="show = !show"
                    />
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
                          large
                          color="error"
                          @click="$emit('closeDialogRegisterAlldata')"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          large
                          color="primary"
                          :disabled="
                            form.data.cliente.cpf === '' ||
                            form.data.cliente.nomeCompleto === '' ||
                            form.data.cliente.telefone === '' ||
                            form.data.cliente.password === ''
                          "
                          @click="step = 2"
                        >
                          Continue
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
                      Último passo, Vamos nessa concluir seu cadastro.
                    </p>
                  </v-col>
                  <v-col
                    cols="12 pa-0"
                  >
                    <v-text-field
                      v-model="form.data.cliente.empresa.cnpj"
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
                      v-model="form.data.cliente.empresa.nomeEmpresa"
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
                      v-model="form.data.cliente.empresa.endereco"
                      :value="form.data.cliente.empresa.endereco"
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
                      v-model="form.data.cliente.empresa.bairro"
                      :value="form.data.cliente.empresa.bairro"
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
                          v-model="form.data.cliente.empresa.cidade"
                          :value="form.data.cliente.empresa.cidade"
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
                          v-model="form.data.cliente.empresa.uf"
                          :value="form.data.cliente.empresa.uf"
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
                      v-model="form.data.cliente.empresa.numero"
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
                      v-model="form.data.cliente.empresa.complemento"
                      label="complememto"
                      :rules="[rules.required]"
                      outlined
                      required
                    />
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
                          @click="step = 2"
                        >
                          Voltar
                        </v-btn>
                        <v-btn
                          large
                          color="primary"
                          @click="step = 3"
                        >
                          Continue
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
                    v-text="'Você deseja concluir seu cadastro ?'"
                  /> 
                  
                  <v-checkbox
                    @click="() => dialog = true"
                    v-model="form.data.cliente.termoDeUso"
                    :checked="form.data.cliente.termoDeUso"
                    label="Aceitar termos de uso"
                    class="text-uppercase my-3"
                    style="margin-top:0; padding:0"
                    :rules="[rules.required]"
                  />

                  <v-btn
                    large
                    color="primary"
                    :disabled="form.data.cliente.termoDeUso === false"
                    @click.prevent="setUserData"
                    width="100%"
                  >
                    <v-progress-circular
                      v-if="loading"
                      indeterminate
                      color="white"
                    />
                    <span
                      v-else
                      v-text="'Salvar'"
                    />
                    
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-btn 
                    large
                    color="secondary"
                    width="100%"
                    @click="step = 2"
                  >
                    Voltar
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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

  @Component({})

  export default class RegisterDataUSer extends mixins() {

    @Prop({ default: false}) isOpen
    @Emit('closeDialogRegisterAlldata')

    step = 1
    getUSer = null
    show = false
    dialog= false
    searchCep = ""
    loading = false

    form = {
      email: this.$store.getters.getUser.email,
      password: "",
      data: {
        cliente: {
          cpf: "",
          primeiroNome: "",
          sobrenome: "",
          wattsapp: "",
          empresa: {
            email: this.$store.state.user.email,
            cnpj: "",
            nomeEmpresa: "",
            cep: "",
            endereco: "",
            bairro: "",
            cidade: "",
            uf: "",
            numero: "",
            complemento: "",
            wattsapp: "",
          } 
        }
      }
    }

    rules = {
      email: v => /.+@.+/.test(v) || 'Este email não é válido.',
      required: value => !!value || 'Obrigatório.',
      min: v => v.length >= 8 || 'A senha deve conter no minimo 8 characters',
      validateCpf: v => !!v || "CPF inválido!"
    }


    handleTermosDeUso  () {
      this.form.data.cliente.termoDeUso = true;
      this.dialog = false
    }

    async handleCep() {
      const response = await searchCep(this.searchCep)

      if(response) {
        this.form.data.cliente.empresa.cep = response.cep
        this.form.data.cliente.empresa.endereco = response.logradouro
        this.form.data.cliente.empresa.bairro = response.bairro
        this.form.data.cliente.empresa.cidade = response.localidade
        this.form.data.cliente.empresa.uf = response.uf
        return;
      }

      return console.log("Error ao buscar seu endereço")

    }


    setUserData () {
      const PAYLOAD_DATA = require("@/data/dataUser/dataUser.json")
      this.loading = true
      if(this.form) {
        Vue.set(PAYLOAD_DATA, "email", this.form.email)
        Vue.set(PAYLOAD_DATA, "password", this.form.password)
        Vue.set(PAYLOAD_DATA.data.cliente, "cpf", this.form.data.cliente.cpf)
        Vue.set(PAYLOAD_DATA.data.cliente, "primeiroNome", this.form.data.cliente.primeiroNome)
        Vue.set(PAYLOAD_DATA.data.cliente, "sobrenome", this.form.data.cliente.sobrenome)
        Vue.set(PAYLOAD_DATA.data.cliente, "wattsapp", `+55${this.form.data.cliente.wattsapp.replace(/\D/g,"")}`)
        Vue.set(PAYLOAD_DATA.data.cliente.empresa, "cnpj", this.form.data.cliente.empresa.cnpj)
        Vue.set(PAYLOAD_DATA.data.cliente.empresa, "nomeEmpresa", this.form.data.cliente.empresa.nomeEmpresa)
        Vue.set(PAYLOAD_DATA.data.cliente.empresa, "cep", this.form.data.cliente.empresa.cep)
        Vue.set(PAYLOAD_DATA.data.cliente.empresa, "endereco", this.form.data.cliente.empresa.endereco)
        Vue.set(PAYLOAD_DATA.data.cliente.empresa, "bairro", this.form.data.cliente.empresa.bairro)
        Vue.set(PAYLOAD_DATA.data.cliente.empresa, "cidade", this.form.data.cliente.empresa.cidade)
        Vue.set(PAYLOAD_DATA.data.cliente.empresa, "uf", this.form.data.cliente.empresa.uf)
        Vue.set(PAYLOAD_DATA.data.cliente.empresa, "numero", this.form.data.cliente.empresa.numero)
        Vue.set(PAYLOAD_DATA.data.cliente.empresa, "complemento", this.form.data.cliente.empresa.complemento)
        Vue.set(PAYLOAD_DATA.data.cliente, "termoDeUso", this.form.data.cliente.termoDeUso)
      }

      this.$store.dispatch("setAllDataUserComplete", PAYLOAD_DATA)
      setTimeout(() => {
        this.loading = false
        this.$router.go()
      }, 1500)
    }
    
  }
</script>