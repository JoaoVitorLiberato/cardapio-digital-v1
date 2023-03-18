<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer />
      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          text
          rounded
        >
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-btn
            class="black--text"
            style="text-decoration:none"
            text
            depressed
            plain
            :to="item.to"
          >
            {{item.title}}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>
      <router-view/>
  </v-app>
</template>

<script>
import userAuthUser from '@/middlewares/UseAuthUser'
  export default {
    components: {},
    data () { 
      return {
        drawer: null,
        items: [
          { title: 'Sair', to: '/' },
        ],
      } 
    },
    methods: {
      async handleLogout () {
        const { logout } = userAuthUser()

        try {
          await logout()
          this.$router.replace('/')
        } catch (error) {
          console.log(error)
        }

      }
    }
  }
</script>