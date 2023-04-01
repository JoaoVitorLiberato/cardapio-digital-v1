<template>
  <v-footer
    color="#d92400"
    padless
    app
  >
    <v-row
      justify="center"
      no-gutters
    >
    <div
      v-for="({ icon, link}, index) in redes"
      :key="`footer-layout-public-${index}`"
      class="mt-2"
    >
      <a
        color="white"
        text
        rounded
        :href="link"
        target="_blank"
        style="text-decoration:none"
      >
        <v-icon
          class="my-2 mx-3" 
          dark
        >
          {{ icon }}
        </v-icon>
      </a>

    </div>
      <v-col
        class="py-3 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Cardápio Digital</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import "@/assets/styles/components/layoutPublic.styl"

  @Component({})

  export default class FooterComponent extends mixins() {
    redes = [
      {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/joaovitor_liberato/'
      },
      {
        icon: 'mdi-github',
        link: 'https://github.com/JoaoVitorLiberato'
      },
      {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/joaovitorliberato/'
      },
    ]
  }
</script>