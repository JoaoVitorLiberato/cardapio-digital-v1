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
              v-text="` Olá, ${store.user_metadata.cliente.primeiroNome}`"
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
      <v-col
        cols="12"
      >
        <v-row
          justify="center"
          class="mt-8"
        >
          <v-col
            cols="12"
          >
            <h2
              class="font-weight-bold text-uppercase"
            >
              Seus Produtos
            </h2>
          </v-col>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        />
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

  @Component({
    components: {
      RegisterUSer: () => ({
        component: import(
          /* webpackChunkName: "user-register-component" */
          /* webpackMode: "eager" */
          "@/components/register-data-user/RegisterDataUser.vue"
        )
      })
    }
  })

  export default class HomeView extends mixins() {
    dialogRegisterAllDataUser = true
    store = this.$store.getters.getUser

    headers = [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
    ]
  desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: 1,
    }
    ]

    mounted() {
      console.log(this.store)
    }

    created() {
      const handleMetaDataUserVoid = () => {
        if 
        (
          [
            "cliente" in this.$store.state.user.user_metadata,
            "cpf" in this.$store.state.user.user_metadata.cliente,
            "wattsapp" in this.$store.state.user.user_metadata.cliente
          ].every(o => !!o))
        {
          return this.dialogRegisterAllDataUser = false
        }

        return this.dialogRegisterAllDataUser = true
      }

      handleMetaDataUserVoid()
    }

    handleDialogRegisterAllDataUser () {
      this.dialogRegisterAllDataUser = false
    }
  }
</script>
