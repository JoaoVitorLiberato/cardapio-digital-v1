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
    <!-- <RegisterUSer 
      :isOpen="dialogRegisterAllDataUser"
      @closeDialogRegisterAlldata="handleDialogRegisterAllDataUser"
    /> -->
    <RegisterUSer />
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
          /* webpackChunkName: "data-register-component" */
          /* webpackMode: "eager" */
          "@/components/register-data-user/RegisterDataUser.vue"
        )
      })
    }
  })

  export default class HomeView extends mixins() {

    mounted() {
      console.log(this.$store.getters.getUser);
    }

    created() {}

    handleDialogRegisterAllDataUser () {}
  }
</script>
