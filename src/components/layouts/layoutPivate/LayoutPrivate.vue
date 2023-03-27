<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title>Title</v-toolbar-title> -->
      <v-spacer />
      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          rounded
          dark
          text
          dense
        >
          <v-icon>
            {{ iconAccount }}
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-btn
            class="black--text font-wight-bold"
            style="text-decoration:none"
            text
            depressed
            plain
            @click="handleLogout"
          >
            Sair
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      dark
      class="text-uppercase"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Cardápio Digital
          </v-list-item-title>
          <v-list-item-subtitle>
            v 1.0
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <router-view/>
  </v-app>
</template>

<script>
  import { mdiAccount } from '@mdi/js'


  import userAuthUser from '@/middlewares/UseAuthUser'
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"  
  
  @Component({})


  export default class LayoutPrivate extends mixins() {
    drawer = null
    iconAccount = mdiAccount
    items = [
      { title: 'Meus Produtos', icon: 'mdi-view-dashboard' },
      { title: 'Reclamações', icon: 'mdi-message-reply-text', to: "/auth/complaints" },
      { title: 'Sobre', icon: 'mdi-help-box' },
    ]

    async handleLogout () {
      const { logout } = userAuthUser()

      try {

        await logout()
        this.$router.replace('/login')
        
      } catch (error) {
        console.log(error)
      }

    }
  }
</script>