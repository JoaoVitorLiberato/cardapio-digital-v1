<template>
  <h1>Home</h1>
</template>

<script>

  export default {
    name: 'HomeView',
    mounted() {
      this.getUser()
    },
    methods: {
      getUser () {
        console.log(this.$store.state.user)
      }
    }
  }
</script>
