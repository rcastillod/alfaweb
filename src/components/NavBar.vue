<template>
    <v-app-bar
        app
        color="primary"
        dark
    >
        <div class="d-flex align-center">
            <v-img 
                alt="Vuetify Logo" 
                class="shrink mr-2" 
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" 
                transition="scale-transition"
                width="40" />
            <v-img 
                alt="Vuetify Name" 
                class="shrink mt-1 hidden-sm-and-down" 
                contain 
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" 
                width="100" />
        </div>

        <v-spacer></v-spacer>

        <!-- FIXME: Solucionar error de email de usuario -->
        <div class="text-body-2">Bienvenido {{ getUserEmail }}</div>
        <v-btn  
            text
            @click="logOut"
        >
            <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'nav-bar',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['getUserEmail'])
    },
    methods: {
        ...mapActions(['logoutAction']),
        logOut() {
            this.logoutAction()
            .then(() => this.$router.push('/login'))
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>