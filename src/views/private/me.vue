<template>
  <v-container>
    <h1>Home</h1>
  </v-container>
</template>

<script>
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({})

  export default class HomeView extends mixins() {}
</script>
