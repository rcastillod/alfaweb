<template>
  <v-app>
    <nav-bar v-if="isPrivateRoute"></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  data: () => ({

  }),
  computed: {
    isPrivateRoute() {
      return this.$route.meta.privateRoute
    }
  },
  components: {
    'nav-bar': NavBar
  }
};
</script>

<style lang="scss">
.login,
.register {
    height: 100%;
}
</style>
