<template>
  <v-container>
    <h1
      class="mt-12"
    >
     Home
    </h1>
    <RegisterUSer 
      :isOpen="dialogRegisterAllDataUser"
      @closeDialogRegisterAlldata="handleDialogRegisterAllDataUser"
    />
  </v-container>
</template>

<script>
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({
    components: {
      RegisterUSer: () => ({
        component: import(
          /* webpackChunkName: "user-register-component" */
          /* webpackMode: "eager" */
          "@/components/register-data-user/RegisterDataUser.vue"
        )
      })
    }
  })

  export default class HomeView extends mixins() {
    dialogRegisterAllDataUser = false

    created() {
      const handleMetaDataUserVoid = () => {
        if 
        (
          [
            this.$store.getters.getUser.user_metadata,
            this.$store.getters.getUser.user_metadata.termoDeUso,
            this.$store.getters.getUser.user_metadata.user,
            this.$store.getters.getUser.user_metadata.empresa
          ].every(o => !!o))
        {
          return this.dialogRegisterAllDataUser = false
        }

        return this.dialogRegisterAllDataUser = true
      }

      handleMetaDataUserVoid()
    }

    handleDialogRegisterAllDataUser () {
      this.dialogRegisterAllDataUser = false
    }
  }
</script>
