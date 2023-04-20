<template>
  <v-container
    class="fix-container-me"
  >
    <v-row
      no-gutters
      justify="center"
      align="center"
      class="p-0"
    >
      <v-col
        cols="12"
      >
        <v-row
          class="fix-container-header"
        >
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
          >
            <v-row>
              <v-col
                cols="12"
                class="mt-5"
              >
                <h2
                  v-if="dataClient !== null && dataClient.primeiroNome"
                  class="white--text text-uppercase"
                  v-text="`Olá, ${dataClient.primeiroNome}`"
                />
                <h2
                  v-else
                  v-text="'Olá, User'"
                />
              </v-col>
              <v-col
                cols="12"
              >
                <div
                  class="fix-card-list-data-company text--white text-uppercase"
                >
                  <v-row
                    v-if="dataCompany"
                    justify="center"
                    class="text-center"
                  >
                    <v-col
                      cols="12"
                      class="pt-6"
                    >
                      <span
                        class="font-weight-bold white--text"
                        v-text="dataCompany.nome"
                      />
                    </v-col>
                    <v-col
                      cols="12 py-0"
                      
                    >
                      <v-divider
                        color="#fff"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      class="pb-4 pt-5"
                    >
                      <span
                        class="white--text"
                        v-text="dataCompany.cnpj"
                      />
                    </v-col>
                    <v-col
                      cols="12 py-0"
                      
                    >
                      <v-divider
                        color="#fff"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      class="pb-5"
                    >
                      <span
                        class="white--text"
                        v-text="`Autorizado para deixar dados da empresa público: ${dataCompany.autorizacaoPublicData === true ? 'Sim' : 'Não'}`"
                      />
                    </v-col>
                  </v-row>
                  <v-row
                    v-else
                    justify="center"
                    class="text-center"
                  >
                    <v-col
                      cols="12"
                      class="pt-6"
                    >
                      <span
                        class="font-weight-bold"
                        v-text="'Nome da empresa'"
                      />
                    </v-col>
                    <v-col
                      cols="12 py-0" 
                    >
                      <v-divider
                        color="#fff"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      class="pb-4 pt-5"
                    >
                      <span
                        v-text="'CNPJ da empresa'"
                      />
                    </v-col>
                    <v-col
                      cols="12 py-0"
                    >
                      <v-divider
                        color="#fff"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      class="pb-5"
                    >
                      <span
                        v-text="'Autorização para deixar dados da empresa público'"
                      />
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
            justify="center"
            align="center"
          >
            <img 
              class="fix-image-header"
              src="/img/header-me/header.svg" 
              alt="SVG Exemplificando os dados da de balanço de uma empresa"
              width="100%"
              height="100%"
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        class="mt-10"
      >
        <v-row>
          <v-col
            cols="12"
            class="text-end"
          >
            <v-btn
              dark
              x-large
              color="#EB310CBF"
              @click="() => dialogProduct = true"
            >
              <span 
                v-text="'Adcionar'"
              />
            </v-btn>
          </v-col>
          <v-col
            cols="12"
          >
            <v-row>
              <v-col
              v-if="products.length > 0"
                cols="12"
              >
                <v-slide-group
                  v-if="$vuetify.breakpoint.smAndUp"
                  class="pa-4"
                  active-class="success"
                  show-arrows
                >
                  <v-slide-item
                    v-for="{ id, nomeEmpresa, nomeProduto, telCliente, img_url } in products"
                    :key="`slide-group-${id}`"
                  >
                    <CardProduct
                      :img_url="img_url"
                      :titleProduct="nomeProduto"
                      :company="nomeEmpresa"
                      :redirectWattsapp="telCliente"
                      @dialogDataProduct="() => handleSeeMoreProduct(id)"
                      @editProduct="handleOpenEdit(id)"
                      @deleteProduct="handleDeleteProduct(id)"
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
                    v-for="{ id, nomeEmpresa, nomeProduto, telCliente, img_url } in products"
                    :key="`slide-group-${id}`"
                  >
                    <CardProduct
                      :img_url="img_url"
                      :titleProduct="nomeProduto"
                      :company="nomeEmpresa"
                      :redirectWattsapp="telCliente"
                      @dialogDataProduct="() => handleSeeMoreProduct(id)"
                      @editProduct="handleOpenEdit(id)"
                      @deleteProduct="handleDeleteProduct(id)"
                    />
                  </v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col
                v-else
                cols="12"
              >
                <p
                  class="text-center"
                >
                  Você não possui produtos cadastrados.
                </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
          >
            <v-dialog
              v-model="openDialogProductEdit"
              transition="dialog-bottom-transition"
              max-width="600"
              persistent
            >
              <v-card>
                <v-toolbar
                  color="#EB310CBF"
                  dark
                >
                  <h2>
                    Editar Produtos
                  </h2>
                </v-toolbar>
                <v-card-text>
                  <v-form
                    @submit.prevent="handleEditProduct"
                  >
                    <v-row>
                      <v-col
                        cols="12 pa-0"
                        class="mb-5 mt-10"
                      >
                        <!-- <v-file-input
                          v-model="file"
                          counter
                          multiple
                          label="File input"
                        /> -->
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
                            v-text="'Editar Produto'"
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
                    @click="handleCloseDialogEdit"
                  >
                    Fechar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <dialogSeeMoreProduct 
              v-if="informationsProduct !== null"
              :dialogSeeMoreProduct="dialogSeeMoreProduct"
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
        </v-row>
      </v-col>
    </v-row>
    <RegisterUSer 
      :isOpen="dialogRegisterAllDataUser"
      @closeDialogRegisterAlldata="() => dialogRegisterAllDataUser = false"
    />
    <RegisterProduct 
      :openDialogProduct="dialogProduct"
      @closeDialogProduct="() => dialogProduct = false"
    />
  </v-container>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import "@/assets/styles/views/privateViews/me.styl"
  import useBD from "@/middlewares/useBD"
  import { updateUploadImage, listImages } from "@/middlewares/useStorage"

  const { list, remove, update } = useBD()

  @Component({
    components: {
      RegisterUSer: () => ({
        component: import(
          /* webpackChunkName: "data-register-component" */
          /* webpackMode: "eager" */
          "@/components/register-data-user/RegisterDataUser.vue"
        )
      }),
      RegisterProduct: () => ({
        component: import(
          /* webpackChunkName: "data-register-component" */
          /* webpackMode: "eager" */
          "@/components/poducts/ProductsRegister.vue"
        )
      }),
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

  export default class HomeView extends mixins() {
    loading = false
    dialogRegisterAllDataUser = false
    dataClient = null
    dataCompany = null
    dialogProduct = false
    products = []
    informationsProduct = null
    informationsCompany = null
    dialogSeeMoreProduct = false
    dialogSeeMoreCompany = false
    openDialogProductEdit= false

    formProduct = {
      img_url: "",
      nomeProduto: "",
      receita: "",
      modoPreparo: "",
      nomeEmpresa: "",
      telCliente: ""
    }

    file = []

    rules = {
      required: value => !!value || 'Obrigatório.',
    }

    created() {
      const validateDataUser = async () => {
        const client = await list("client")
        const company = await list("company")
        
        const clientFiltered = client.find(item =>  {
          return item.user_id === this.$store.getters.getUser.id
        })
  
        const companyFiltered = company.find(item =>  {
          return item.user_id === this.$store.getters.getUser.id
        })
  
        if (clientFiltered && companyFiltered) {
          this.$store.dispatch("setDataCompany", companyFiltered)
          this.$store.dispatch("setDataClient", clientFiltered)
        }
        
        if(
          [ 
            /me/i.test(this.$router.currentRoute.name),
            !this.$store.getters.getClient,
            !this.$store.getters.getCompany,
          ].every(o => !!o)
          ) {
          console.log("necessita cadastrar seus dados.");
          this.dialogRegisterAllDataUser = true
          return; 
        }
  
        console.log(`Já existe dados do email: ${this.$store.getters.getUser.email} cadastrado em nosso banco de dados.`)
        this.dialogRegisterAllDataUser = false

        this.dataClient = clientFiltered
        this.dataCompany = companyFiltered

        return {
          clientFiltered,
          companyFiltered
        }
      } 

      if( "user" in this.$store.state) {
        validateDataUser()
      }
    }

    mounted () {
      this.dataProductFiltered()

        const filterImages = async () => {
          const data = await listImages("product")

          data.filter(item => {
            if(this.$store.getters.getCompany) {
              if(item.name.toLocaleLowerCase().includes(this.$store.getters.getCompany.cnpj.replace(/\D/g,"").toLocaleLowerCase())) {
                this.file = item
                console.log(this.file)
                return item
              }
            }
          })

          return;
        }
        
        filterImages()
    }

    async dataProductFiltered() {
      const listProducts = await list("product")
        
      const productFilteredByIdLoggedInUser = listProducts.filter(
        item => item.user_id === this.$store.getters.getUser.id
      )

      this.products = [
        ...productFilteredByIdLoggedInUser
      ]
    }

    async handleSeeMoreProduct(id) {
      const productFilteredById = this.products.filter(item => item.id === id)
      this.informationsProduct = productFilteredById[0]
      this.dialogSeeMoreProduct = true
      return productFilteredById
    }

    async handleSeeMoreCompany(userID) {
      const company = await list("company")
      const companyFilteredByUserId = company.filter(item => item.user_id === userID)
      this.informationsCompany = companyFilteredByUserId[0]
      this.dialogSeeMoreCompany = true
      return companyFilteredByUserId
    }

    async handleOpenEdit(id) {
      
      const productFiltered = this.products.find(item => item.id === id)

      console.log(productFiltered);

      if(productFiltered) {
        localStorage.setItem("product_id", productFiltered.id)
        this.formProduct.img_url = productFiltered.img_url
        this.formProduct.nomeProduto = productFiltered.nomeProduto
        this.formProduct.receita = productFiltered.receita
        this.formProduct.modoPreparo = productFiltered.modoPreparo
        this.openDialogProductEdit = true

        return productFiltered
      }

      return "Não há produtos com esse ID"
    }

    handleCloseDialogEdit () {
      localStorage.removeItem("product_id")
      this.openDialogProductEdit = false
      return;
    }

    async handleEditProduct() {
      const PAYLOAD = require("@/data/product/product.json")

      if( this.file.length > 0 && this.file[0].name !== this.formProduct.img_url ) {
        updateUploadImage("product", this.formProduct.img_url, this.file[0])
        console.log("product", this.formProduct.img_url, this.file[0])
        console.log("imagem atualizada");
      }

      if(this.formProduct) {
        Vue.set(PAYLOAD, "img_url", this.formProduct.img_url)
        Vue.set(PAYLOAD, "nomeProduto", this.formProduct.nomeProduto)
        Vue.set(PAYLOAD, "receita", this.formProduct.receita)
        Vue.set(PAYLOAD, "modoPreparo", this.formProduct.modoPreparo)
        Vue.set(PAYLOAD, "nomeEmpresa", this.$store.getters.getCompany.nome)
        Vue.set(PAYLOAD, "telCliente", this.$store.getters.getClient.wattsapp)
      }

      console.log(PAYLOAD)

      await update("product", PAYLOAD, localStorage.getItem("product_id"))
      console.log("Produto editado com sucesso")
      this.openDialogProductEdit = false

      return this.dataProductFiltered()
    }

    async handleDeleteProduct(id) {
      await remove("product", id)
      console.log("Produto Removido com sucesso");
      return this.dataProductFiltered()
    }

  }
</script>
