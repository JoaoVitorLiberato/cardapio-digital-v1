<template>
  <v-app>
    <v-app-bar
      app
      color="#d92400"
      dark
      dense
      flat
      class="fix-toolbar"
      style="height: 50px;"
    >
      <v-tabs
        class="fix-tabs-layout-public"
        centered
        color="white"
        :style="$vuetify.breakpoint.xsOnly ? 'height: 50px;' : 'height: 70px;'"
      >
        <v-tab
          v-for="({name, to}, index) in links"
          :key="`key-layout-public-${index}`"
        >
          <v-btn
            class="gray--text"
            style="text-decoration:none"
            text
            depressed
            plain
            :to="to"
          >
            {{name}}
          </v-btn>
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main
      class="fix-main-content"
    >
      <router-view/>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import "@/assets/styles/components/layoutPublic.styl"

  @Component({
    components: {
      FooterComponent: () => ({
        component: import(
          /* webpackChunkName: "data-register-component" */
          /* webpackMode: "eager" */
          "@/components/footer/Footer.vue"
        ) 
      })
    }
  })

  export default class LayoutPublic extends mixins() {
    links = [
      {
        name: 'Produtos',
        to: '/products'
      },
      {
        name: 'Login',
        to: '/login'
      },
      {
        name: 'Contato',
        to: '/contact'
      },
      {
        name: 'Sobre',
        to: '/about'
      },
    ]
  }
</script>
