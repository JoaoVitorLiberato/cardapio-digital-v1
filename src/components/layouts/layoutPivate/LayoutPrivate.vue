<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="#d92400"
      class="fix-toolbar-private"
    >
      <v-app-bar-nav-icon 
        @click="drawer = !drawer" 
      />

      <v-spacer />

      <v-menu 
        bottom min-width="200px" 
        rounded offset-y
      >
        <template 
          v-slot:activator="{ on }"
        >
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
        <v-card>
          <v-list-item-content 
            class="justify-center"
          >
            <div 
              class="mx-auto text-center"
            >
              <p 
                class="text-caption mt-1 px-1"
              >
                <!-- {{  store.email }} --> Email
              </p>

              <v-divider 
                class="my-3" 
              />

              <v-btn 
                depressed 
                rounded 
                text
              > 
                Edit Account 
              </v-btn>

              <v-divider
                class="my-3" 
              />

              <v-btn
                class="black--text font-wight-bold"
                style="text-decoration: none"
                text
                depressed
                plain
                @click="handleLogout"
              >
                Sair
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      clipped
      dark
      color="#EB310CBF"
      class="text-uppercase"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title 
            class="text-h6"
          >
            Cardápio Digital
          </v-list-item-title>
          <v-list-item-subtitle> v 1.0 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list 
        dense 
        nav
      >
        <v-list-item 
          v-for="item in items" 
          :key="item.title" 
          link :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view />
    <FooterComponent />
  </v-app>
</template>

<script>
  import { mdiAccount } from "@mdi/js";
  import userAuthUser from "@/middlewares/UseAuthUser";
  import { Component } from "vue-property-decorator";
  import { mixins } from "vue-class-component";
  import "@/assets/styles/components/layoutPrivate.styl"

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
  export default class LayoutPrivate extends mixins() {
    drawer = null;
    iconAccount = mdiAccount;
    items = [
      { title: "home", icon: "mdi-home", to: "/auth/me" },
      {
        title: "Reclamações",
        icon: "mdi-message-reply-text",
        to: "/auth/complaints",
      },
    ];

    store = this.$store.getters.getUser

    async handleLogout() {
      const { logout } = userAuthUser();

      try {
        await logout();
        this.$router.replace("/login");
      } catch (error) {
        console.log(error);
      }
    }
  }
</script>
