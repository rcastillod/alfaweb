<template>
  <v-app>
    <nav-bar v-if="isPrivateRoute"></nav-bar>
    <v-main class="pt-2 pt-md-16">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  data: () => ({

  }),
  computed: {
    ...mapState(['user']),
    isPrivateRoute() {
      return this.$route.meta.privateRoute
    }
  },
  methods: {
    ...mapActions(['fetchCoursesAction'])
  },
  components: {
    'nav-bar': NavBar
  },
  created() {
      if ( this.user != null ) {
        this.fetchCoursesAction()
      }
    }
};
</script>

<style lang="scss">
body .theme--light.v-sheet,
body .theme--light.v-application {
  background-color: #F6FAFF;
  color: $text-color !important;
}
.login,
.register {
    height: 100%;
}
/** Login & Register Form */
.login,
.register {
  background-image: url('./assets/img/login-bg.png');
  background-size: cover;
  background-position: center center;
  .form-card {
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 20px rgba($text-color, .1) !important;
  }
}
.sign-link {
  cursor: pointer;
  transition: color 300ms ease-in-out;
  &:hover {
    color: #170035 !important;
  }
}

/** Divider */
.divider {
  background-color: $secondary-color;
  display: block;
  margin-bottom: 3.125rem;
  height: .4375rem;
  width: 3.125rem;
}
/** Heading Title */
.heading-title {
    background-color: #ffffff;
    border-bottom: 1px solid rgba($text-color, .2);
    border-top: 1px solid rgba($text-color, .2);
}
</style>
