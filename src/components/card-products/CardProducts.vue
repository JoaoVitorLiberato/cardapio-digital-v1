<template>
  <v-card
    class="mx-auto"
    max-width="320"
  >
    <v-img
      src="https://th.bing.com/th/id/R.a4fb5ae2ee2f7d628446fcb7a4c5588e?rik=LwIw84avT5f5Bw&pid=ImgRaw&r=0"
      height="200px"
    />

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions
      class="d-flex justify-space-between"
    >
      <v-btn
        color="#EB310CBF"
        text
      >
        <span 
          v-text="'Ver'"
        />
        <v-icon
          size="20"
        >
          mdi-plus
        </v-icon>
      </v-btn>

      <v-btn
        depressed
        color="#EB310CBF"
        text
      >
        Eu quero
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({})

  export default class CardProduct extends mixins() {

  }
</script>