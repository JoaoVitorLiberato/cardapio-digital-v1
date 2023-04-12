<template>
  <v-app>
    <v-main class="pt-0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import "@/assets/styles/global.styl"
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  
  @Component({})

  export default class App extends mixins() {}
</script>
