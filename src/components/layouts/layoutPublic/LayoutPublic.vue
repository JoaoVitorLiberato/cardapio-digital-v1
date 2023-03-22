<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
      class="fix-toolbar"
    >
      <v-tabs
        centered
        class="fix-tabs ml-n9 grey darken-4"
        color="grey darken-1"
        :style="$vuetify.breakpoint.xsOnly ? 'height: 50px;' : 'height: 70px;'"
      >
        <v-tab
          v-for="({name, to}, index) in links"
          :key="`key-layout-public-${index}`"
        >
          <v-btn
            class="white--text"
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
    ]
  }
</script>
