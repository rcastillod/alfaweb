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
                        <a
                            @click="toHome()"
                        >
                            <v-img
                                alt="Vuetify Logo" 
                                class="shrink mr-2" 
                                contain
                                src="../assets/img/logo.svg" 
                                transition="scale-transition"
                                width="230" />
                        </a>
                    </div>
            
                    <v-spacer></v-spacer>
                    
                    <v-avatar 
                        class="mr-3 d-none d-sm-flex"
                        size="30">
                        <img
                            src="https://picsum.photos/id/1005/30/30"
                            alt="Avatar"
                        >
                    </v-avatar>
                    <div class="text-body">
                        <div class="d-none d-sm-flex">
                            Bienvenido 
                            <span class="font-weight-bold accent--text ml-2 mr-3">{{ getUserEmail }}</span></div>
                        </div>
                        <v-app-bar-nav-icon 
                            @click.stop="drawer = !drawer"
                            color="primary"></v-app-bar-nav-icon>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer 
            v-model="drawer"
            color="#F6FAFF"
            fixed 
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
                @click="redirectTo(route.name)"
                :disabled="currentRoute==route.name"
                link
                >
                    <v-list-item-icon>
                        <v-icon>{{ route.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ route.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                @click="logOut()"
                link
                >
                    <v-list-item-icon>
                        <v-icon>mdi-logout-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Cerrar Sesión</v-list-item-title>
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
    data: function(){
        return {
            drawer: false,
            group: null,
            routes: [
                { title: 'Home', icon: 'mdi-home-variant-outline', name: 'home' },
                { title: 'Cursos', icon: 'mdi-book-open-outline', name: 'courses' },
            ],
        }
    },
    computed: {
        ...mapGetters(['getUserEmail']),
        currentRoute(){
            return this.$route.name
        }
    },
    methods: {
        ...mapActions(['logoutAction']),
        logOut() {
            this.logoutAction()
            .then(() => this.$router.push('/login'))
            .catch((error) => console.log(error))
        },
        toHome() {
            if ( this.$route.name !== 'home' ) {
                this.$router.push('/')
            }
        },
        redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
        },
    },
    watch: {
        group () {
            this.drawer = false
        },
    }
}
</script>

<style scoped>
    
</style>