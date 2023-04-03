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
                  cols="12"
                >
                  <p
                    class="mt-2"
                  >
                    É hora de cadastrar o produto, Vamos lá?!
                  </p>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="formProduct.nome"
                    label="Nome Completo"
                    :rules="[rules.required]"
                    placeholder="Informe seu nome completo"
                    outlined
                    required
                  />
                </v-col>

                <v-col
                  cols="12"
                > 
                  <v-textarea
                    v-model="formProduct.descricao"
                    label="Descrição do Produto"
                    placeholder="Por Favor, Descreva o produto com detalhes."
                    :rules="[rules.required]"
                    auto-grow
                    outlined
                  />
                </v-col>
                <v-col
                  cols="12"
                > 
                  <v-btn
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
  import { Component, Emit, Prop } from "vue-property-decorator"
  import useBD from "@/middlewares/useBD"

  const { postTableWithCompanyID } = useBD()

  @Component({})

  export default class ProductComponent extends mixins() {  
    @Emit('closeDialogProduct')
    @Prop({ default: false}) openDialogProduct

    formProduct = {
      nome: "",
      descricao: "",
    }
    loading = false

    rules = {
      required: value => !!value || 'Obrigatório.',
    }

    async handleAddProduct() {
      this.loading = true
      try {
        await postTableWithCompanyID(
          "product", 
          this.formProduct
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