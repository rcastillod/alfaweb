<template>
    <div>
        <v-banner
            single-line
        >
            <v-icon
                slot="icon"
                color="accent"
                size="36"
            >
                mdi-account-group-outline
            </v-icon>
            Cantidad total de alumno permitidos: 
            <v-chip 
                class="ml-3"
                color="primary">
                {{getAlumnosPermitidos}} alumnos
            </v-chip>
        </v-banner>
        <v-banner
            single-line
        >
            <v-icon
                slot="icon"
                color="accent"
                size="36"
            >
                mdi-account-multiple-check-outline
            </v-icon>
            Cantidad total de alumno inscritos: 
            <v-chip 
                class="ml-3"
                color="primary">
                {{getAlumnosInscritos}}  alumnos
            </v-chip>
        </v-banner>
        <v-banner
            single-line
        >
            <v-icon
                slot="icon"
                color="accent"
                size="36"
            >
                mdi-account-multiple-plus-outline
            </v-icon>
            Cantidad total de cupos restantes: 
            <v-chip 
                class="ml-3"
                color="primary">
                {{cuposRestantes}}  alumnos
            </v-chip>
        </v-banner>
        <v-banner
            single-line
        >
            <v-icon
                slot="icon"
                color="accent"
                size="36"
            >
                mdi-calendar-alert-outline
            </v-icon>
            Cantidad total de cursos terminados: 
            <v-chip 
                class="ml-3"
                color="primary">
                {{getCursosTerminados}}  cursos
            </v-chip>
        </v-banner>
        <v-banner
            single-line
        >
            <v-icon
                slot="icon"
                color="accent"
                size="36"
            >
                mdi-calendar-check-outline
            </v-icon>
            Cantidad total de cursos activos: 
            <v-chip 
                class="ml-3"
                color="primary">
                {{getCursosActivos}}  cursos
            </v-chip>
        </v-banner>
        <v-banner
            single-line
        >
            <v-icon
                slot="icon"
                color="accent"
                size="36"
            >
                mdi-book-open-page-variant-outline
            </v-icon>
            Cantidad total de cursos: 
            <v-chip 
                class="ml-3"
                color="primary">
                {{getCursos}}  cursos
            </v-chip>
        </v-banner>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'courses-info',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters([ 
            'getAlumnosPermitidos',
            'getAlumnosInscritos',
            'getCursosTerminados',
            'getCursosActivos',
            'getCursos',
        ]),
        cuposRestantes() {
            let restantes = this.getAlumnosPermitidos - this.getAlumnosInscritos
            return restantes
        }
    },
    //methods: {}
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