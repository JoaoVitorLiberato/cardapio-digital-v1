<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="({name, to}, index) in links"
          :key="`key-layout-public-${index}`"
        >
          <router-link
            class="grey--text"
            style="text-decoration:none"
            :to="{name: `${to}`}"
          >
            {{ name }}
          </router-link>
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {
          name: 'Podutos',
          to: 'products'
        },
        {
          name: 'Login',
          to: 'login'
        },
      ],
    }),
  }
</script>