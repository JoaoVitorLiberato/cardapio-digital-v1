<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="gray"
      flat
      class="fix-toolbar"
    >
      <v-tabs
        centered
        color="white darken-1"
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
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<script>
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import "@/assets/styles/components/layoutPublic.styl"

  @Component({})

  export default class LayoutPublic extends mixins() {
    links = [
      {
        name: 'Podutos',
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
    ]
  }
</script>
