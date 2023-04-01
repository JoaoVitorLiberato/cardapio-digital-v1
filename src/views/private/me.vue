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
                  v-if="dataClientFiltered.primeiroNome"
                  class="white--text text-uppercase"
                  v-text="`Olá, ${dataClientFiltered.primeiroNome}`"
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
                    v-if="dataCompanyFiltered"
                    justify="center"
                    class="text-center"
                  >
                    <v-col
                      cols="12"
                      class="pt-6"
                    >
                      <span
                        class="font-weight-bold white--text"
                        v-text="dataCompanyFiltered.nome"
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
                        v-text="dataCompanyFiltered.cnpj"
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
                        v-text="`Autorizado para deixar dados da empresa público: ${dataCompanyFiltered.autorizacaoPublicData === true ? 'Sim' : 'Não'}`"
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
            >
              <span 
                v-text="'Adcionar'"
              />
            </v-btn>
          </v-col>
          <v-col
            cols="12"
          >
            <v-slide-group
              v-if="$vuetify.breakpoint.mdAndUp"
              v-model="model"
              class="pa-4"
              active-class="success"
              show-arrows
            >
              <v-slide-item
                v-for="n in 5"
                :key="n"
              >
                <v-card
                  class="mx-6 my-4"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <v-card
                      class="mx-auto"
                      max-width="344"
                    >
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200px"
                      />

                      <v-card-title>
                        Top western road trips
                      </v-card-title>

                      <v-card-subtitle>
                        1,000 miles of wonder
                      </v-card-subtitle>

                      <v-card-actions>
                        <v-btn
                          color="orange lighten-2"
                          text
                        >
                          Explore
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                          icon
                          @click="show = !show"
                        >
                          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="show">
                          <v-divider></v-divider>

                          <v-card-text>
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                          </v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
            <v-carousel
              v-else
              :show-arrows="false"
              hide-delimiters
              style="transform: translateY(60px)"
            >
              <v-carousel-item
                v-for="n in 5"
                :key="n"
              >
                <v-card
                  class="mx-auto"
                  width="310"
                >
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                  />

                  <v-card-title>
                    Top western road trips
                  </v-card-title>

                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                      icon
                      @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <RegisterUSer 
      :isOpen="dialogRegisterAllDataUser"
      @closeDialogRegisterAlldata="handleDialogRegisterAllDataUser"
    />
  </v-container>
</template>

<script>
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import "@/assets/styles/views/privateViews/me.styl"
  import useBD from "@/middlewares/useBD"

  const { list } = useBD()


  @Component({
    components: {
      RegisterUSer: () => ({
        component: import(
          /* webpackChunkName: "data-register-component" */
          /* webpackMode: "eager" */
          "@/components/register-data-user/RegisterDataUser.vue"
        )
      })
    }
  })

  export default class HomeView extends mixins() {
    loading = false
    show = false
    dialogRegisterAllDataUser = false
    dataCompanyFiltered = []
    dataClientFiltered = []

    created() {
      const validateDataUser = async () => {
        const client = await list("client")
        const company = await list("company")
       
        const clientFiltered = client.find(item =>  {
          return item.user_id === this.$store.getters.getUser.id
        });

        const companyFiltered = company.find(item =>  {
          return item.user_id === this.$store.getters.getUser.id
        });
        
        this.dataClientFiltered = clientFiltered
        this. dataCompanyFiltered = companyFiltered
        
        /*
          Essa logica eu fiz para retorna o primeiro indice da tabela que tivesse
          o mesmo user_id do usuario que está logado caso já estiver 
          com os dados cadastrado no BD, por eu achar que estava muito verbezo,
          eu procurei outro metodo e fiz com find() .
        */

        // let clientFiltered;
        // let companyFiltered;

        // if(client !== null && company !== null) {
        //   for (let client = 0; client < client.length; client++) {
        //     for (let company = 0; company < client.length; company++) {
        //       clientFiltered = client[client].user_id
        //       companyFiltered = company[company].user_id
        //       console.log(client[client].user_id)
        //       console.log(company[company].user_id)
        //     }
        //   }
        // }

        if([
          this.$store.getters.id,
          !clientFiltered === this.$store.getters.id, 
          !companyFiltered === this.$store.getters.id
        ].every(o => !!o)) {
          console.log("necessita cadastrar seus dados.");
          this.dialogRegisterAllDataUser = true
          return; 
        }

        console.log(`Já existe dados do email: ${this.$store.getters.getUser.email} cadastrado em nosso banco de dados.`)
        this.dialogRegisterAllDataUser = false
        return; 
      } 

      validateDataUser()
    }

    handleDialogRegisterAllDataUser () {
      this.dialogRegisterAllDataUser = false
    }
  }
</script>
