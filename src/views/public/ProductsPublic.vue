<template>
  <v-container
    class="d-flex justify-space-around"
  >
    <v-row
      no-gutters
    >
      <v-col
        cols="12"
      >
        <v-row>
          <v-col
            v-if="listOfProducts.length > 0"
            cols="12"
          >
            <h2
              class="text-center text-uppercase font-weight-bold mt-8"
              style="font-size: 30px;"
              v-text="'Todos os Produtos'"
            />
          </v-col>
          <v-col
            v-if="listOfProducts.length > 0"
            cols="12"
          >
            <v-slide-group
              v-if="$vuetify.breakpoint.smAndUp"
              class="pa-4"
              active-class="success"
              show-arrows
            >
              <v-slide-item
                v-for="{ id, nomeEmpresa, nomeProduto, telCliente, img_url } in listOfProducts"
                :key="`slide-group-${id}`"
              >
                <CardProduct
                  :img_url="img_url"
                  :titleProduct="nomeProduto"
                  :company="nomeEmpresa"
                  :redirectWattsapp="telCliente"
                  @dialogDataProduct="() => handleSeeMoreProduct(id)"
                />
              </v-slide-item>
            </v-slide-group>
            <v-carousel
              v-else
              :show-arrows="false"
              hide-delimiters
              style="transform: translateY(60px)"
            >
              <v-carousel-item
                v-for="{ id, nomeEmpresa, nomeProduto, telCliente, img_url } in listOfProducts"
                :key="`slide-group-${id}`"
              >
                <CardProduct
                  :img_url="img_url"
                  :titleProduct="nomeProduto"
                  :company="nomeEmpresa"
                  :redirectWattsapp="telCliente"
                  @dialogDataProduct="() => handleSeeMoreProduct(id)"
                />
              </v-carousel-item>
            </v-carousel>
            <dialogSeeMoreProduct 
              v-if="informationsProduct !== null"
              :dialogSeeMoreProduct="dialogSeeMoreProduct"
              :image="informationsProduct.img_url"
              :titleReceita="informationsProduct.nomeProduto"
              :company="informationsProduct.nomeEmpresa"
              :receita="informationsProduct.receita"
              :modoPreparo="informationsProduct.modoPreparo"
              :redirectWattsapp="informationsProduct.telCliente"
              @closeDialogSeeMoreProduct="() => dialogSeeMoreProduct = false"
              @seeMoreCompany="handleSeeMoreCompany(informationsProduct.user_id)"
            />
            <dialogSeeMoreCompany
              v-if="informationsCompany !== null"
              :dialogSeeMoreCompany="dialogSeeMoreCompany"
              :nome="informationsCompany.nome"
              :cnpj="informationsCompany.cnpj"
              :cep="informationsCompany.cep"
              :endereco="informationsCompany.endereco"
              :numero="informationsCompany.numero"
              :complemento="informationsCompany.complemento"
              :bairro="informationsCompany.bairro"
              :cidade="informationsCompany.cidade"
              :uf="informationsCompany.uf"
              @closeDialogSeeMoreCompany="() => dialogSeeMoreCompany = false"
            />
          </v-col>
          <v-col
            v-else
            class="text-center"
          >
            <h2
              class="text-uppercase font-weight-bold"
            >
              Não existe produtos cadastrado em nosso banco de dados.
            </h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
 import { Component } from "vue-property-decorator"
 import { mixins } from "vue-class-component"
 import useBD from "@/middlewares/useBD" 

 const { list } = useBD()


 @Component({
  components: {
    CardProduct: () => ({
      component: import(
        /* webpackChunkName: "product-card-component" */
        /* webpackMode: "eager" */
        "@/components/card-products/CardProducts.vue"
      )
    }),
    dialogSeeMoreProduct: () => ({
        component: import(
          /* webpackChunkName: "seeMoreProduct-dialog-component" */
          /* webpackMode: "eager" */
          "@/components/dialog-see-more-product/dialogSeeMoreProduct.vue"
        )
      }),
      dialogSeeMoreCompany: () => ({
        component: import(
          /* webpackChunkName: "seeMoreCompany-dialog-component" */
          /* webpackMode: "eager" */
          "@/components/dialog-see-more-company/dialogSeeMoreCompany.vue"
        )
      }),
  }
 })

  export default class ProductsView extends mixins() {
    listOfProducts = []
    listOfCompany = []
    informationsProduct = null
    informationsCompany = null
    dialogSeeMoreProduct = false
    dialogSeeMoreCompany = false

    mounted () {      
      const data = async () => {
        const products = await list("product")
        const companies = await list("company")
        
        this.listOfCompany = [ 
          ...companies
        ]

        this.listOfProducts = [ 
          ...products
        ]

        return;
      }

      data()
    }

    async handleSeeMoreProduct(id) {
      const productFilteredById = this.listOfProducts.filter(item => item.id === id)
      this.informationsProduct = productFilteredById[0]
      this.dialogSeeMoreProduct = true
      return productFilteredById
    }

    async handleSeeMoreCompany(userID) {
      const companyFilteredByUserId = this.listOfCompany.filter(item => item.user_id === userID)
      this.informationsCompany = companyFilteredByUserId[0]
      this.dialogSeeMoreCompany = true
      return companyFilteredByUserId
    }
  }
</script>
