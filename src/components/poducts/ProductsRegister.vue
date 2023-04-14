<template>
  <v-container>
      <v-dialog
        v-model="openDialogProduct"
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <v-card>
          <v-toolbar
            color="#EB310CBF"
            dark
          >
            <h2>
              Cadastrar Produtos
            </h2>
          </v-toolbar>
          <v-card-text>
            <v-form
              @submit.prevent="handleAddProduct"
            >
              <v-row>
                 <v-col
                  cols="12 pa-0"
                >
                  <p
                    class="mt-10"
                  >
                    É hora de cadastrar o produto, Vamos lá?!
                  </p>
                </v-col>
                <v-col
                  cols="12 pa-0"
                >
                  <v-text-field
                    v-model="formProduct.nomeProduto"
                    label="Nome do Produto"
                    :rules="[rules.required]"
                    outlined
                    required
                  />
                </v-col>

                <v-col
                  cols="12 pa-0"
                > 
                  <v-textarea
                    v-model="formProduct.receita"
                    label="Descrição do Produto"
                    placeholder="Por Favor, Descreva a receita com detalhes."
                    :rules="[rules.required]"
                    auto-grow
                    outlined
                  />
                </v-col>
                <v-col
                  cols="12 pa-0"
                > 
                  <v-textarea
                    v-model="formProduct.modoPreparo"
                    label="Modo de Preparo"
                    placeholder="Por Favor, Descreva o modo de preparo com detalhes."
                    :rules="[rules.required]"
                    auto-grow
                    outlined
                  />
                </v-col>
                <v-col
                  cols="12 pa-0"
                > 
                  <v-btn
                    width="100%"
                    x-large
                    dark
                    depressed
                    color="#EB310CBF"
                    type="submit"
                  >
                    <v-progress-circular
                      v-if="loading"
                      indeterminate
                      color="white"
                    />
                    <span
                      v-else 
                      v-text="'Cadastrar Produto'"
                    />
                  </v-btn>
                </v-col>
              </v-row>

            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              text
              color="#EB310CBF"
              @click="$emit('closeDialogProduct')"
            >
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script>
  import { mixins } from "vue-class-component"
  import { Component, Emit, Prop, Vue } from "vue-property-decorator"
  import useBD from "@/middlewares/useBD"

  const { postTableWithCompanyID } = useBD()

  @Component({})

  export default class ProductComponent extends mixins() {  
    @Emit('closeDialogProduct')
    @Prop({ default: false}) openDialogProduct


    formProduct = {
      nomeProduto: "",
      receita: "",
      modoPreparo: "",
      nomeEmpresa: "",
      telCliente: ""
    }
    
    loading = false

    rules = {
      required: value => !!value || 'Obrigatório.',
    }

    async handleAddProduct() {
      this.loading = true

      const PAYLOAD = require("@/data/product/product.json")

      if(this.formProduct) {
        Vue.set(PAYLOAD, "nomeProduto", this.formProduct.nomeProduto)
        Vue.set(PAYLOAD, "receita", this.formProduct.receita)
        Vue.set(PAYLOAD, "modoPreparo", this.formProduct.modoPreparo)
        Vue.set(PAYLOAD, "nomeEmpresa", this.$store.getters.getCompany.nome)
        Vue.set(PAYLOAD, "telCliente", this.$store.getters.getClient.wattsapp)
      }
      
      try {
        await postTableWithCompanyID(
          "product", 
          PAYLOAD
        )

        setTimeout(() => {
          this.loading = false
          this.$router.go()
        }, 1400)

      } catch (error) {
        console.log(error.message)
      }
    }

  }
</script>