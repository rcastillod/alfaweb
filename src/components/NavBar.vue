<template>
    <div>

        <v-app-bar
            app
            color="white"
            elevation="0"
        >
            <v-container>
                <v-row align="center">
                    <div class="d-flex align-center">
                        <v-img 
                            alt="Vuetify Logo" 
                            class="shrink mr-2" 
                            contain
                            src="../assets/img/logo.svg" 
                            transition="scale-transition"
                            width="230" />
                    </div>
            
                    <v-spacer></v-spacer>
                    
                    <v-avatar 
                        class="mr-3"
                        size="30">
                        <img
                            src="https://picsum.photos/id/1005/30/30"
                            alt="Avatar"
                        >
                    </v-avatar>
                    <div class="text-body">
                        Bienvenido 
                        <span class="font-weight-bold accent--text mr-3">{{ getUserEmail }}</span></div>
                        <v-app-bar-nav-icon 
                            @click.stop="drawer = !drawer"
                            color="primary"></v-app-bar-nav-icon>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer 
            v-model="drawer"
            absolute 
            right 
            temporary>
            <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Bienvenido 
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ getUserEmail }}
                </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item
                v-for="route in routes"
                :key="route.title"
                link
                >
                <v-list-item-icon>
                    <v-icon>{{ route.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ route.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'nav-bar',
    // props: {},
    data: function(){
        return {
            drawer: false,
            group: null,
            routes: [
                { title: 'Cursos', icon: 'mdi-book-open-outline' },
                { title: 'Photos', icon: 'mdi-image' },
                { title: 'About', icon: 'mdi-help-box' },
            ],
        }
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
    },
    watch: {
        group () {
            this.drawer = false
        },
    },
    //components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>