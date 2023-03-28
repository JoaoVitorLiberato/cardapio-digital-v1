<template>
  <v-container
    class="mt-12"
  >
    <v-row
      no-gutters
      justify="center"
      align="center"
      class="p-0"
      style="height:100px"
    >
      <v-col
        cols="12"
      >
        <v-row
          class="blue-grey lighten-4"
        >
          <v-col
            cols="8"
          >
            <h2>
              ola, João.
            </h2>
            <p>
              Empresa tal
            </p>
            <p>
              endereço tal
            </p>
          </v-col>
          <v-col
            cols="4"
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
