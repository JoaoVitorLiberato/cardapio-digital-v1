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
          class="fix-container-header blue-grey lighten-4"
        >
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
          >
            <h2
              v-text="'Olá, User'"
            />
          </v-col>
          <v-col
            :cols="$vuetify.breakpoint.xsOnly ? '12' : '6'"
            justify="center"
            align="center"
          >
            <div
              class="conatiner__image"
            >
              <img 
                src="https://cdn3.iconfinder.com/data/icons/seo-and-web-optimization-1/200/vector_416_03-512.png" 
                alt="Imagem da logo da empresa"
                width="100%"
                height="100%"
              >
            </div>
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

    dialogRegisterAllDataUser = false

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
