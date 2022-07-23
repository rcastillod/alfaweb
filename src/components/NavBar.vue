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

        <v-btn  
            text
            @click="logOut"
        >
            <span class="mr-2">
                Cerrar Sesión
            </span>
            <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
    name: 'nav-bar',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        async logOut() {
            const auth = getAuth();

            try {
                await signOut(auth)
                this.$router.push('/login')
            }
            catch(error) {
                console.log(error)
            }
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