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
body .theme--light.v-sheet,
body .theme--light.v-application {
  color: $text-color !important;
}
.login,
.register {
    height: 100%;
}
/** Divider */
.divider {
  background-color: $secondary-color;
  display: block;
  margin-bottom: 3.125rem;
  height: .4375rem;
  width: 3.125rem;
}
</style>
