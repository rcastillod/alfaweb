<template>
    <v-card
        class="course-card mx-auto"
        elevation="0"
        max-width="374"
    >
        <template slot="progress">
        <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
        ></v-progress-linear>
        </template>

        <v-img
            height="250"
            :src="imagen"
        ></v-img>

        <v-card-title class="text-h6 text--primary">{{curso}}</v-card-title>

        <v-card-text>
            <div class="mt-0 mb-4 text-subtitle-1">
                <span class="secondary--text text--darken-3">$ {{costo}}</span> - Duración {{duracion}}
            </div>
            <div>{{descripcion}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
            <v-chip-group
                column
            >
                <v-chip
                    class="ma-2"
                    color="primary"
                    text-color="white"
                >
                    <v-avatar
                        left
                        class="primary lighten-3"
                    >
                        {{cupos}}
                    </v-avatar>
                    Cupos
                </v-chip>
                <v-chip
                    class="ma-2"
                    color="secondary"
                    text-color="primary"
                >
                    <v-avatar
                        left
                        class="secondary darken-3"
                        color="white"
                    >
                        {{inscritos}}
                    </v-avatar>
                    Inscritos
                </v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
        
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'course-card',
    props: {
        id: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        curso: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        cupos: {
            type: Number,
            required: true
        },
        inscritos: {
            type: Number,
            required: true
        },
        duracion: {
            type: String,
            required: true
        },
        costo: {
            type: String,
            required: true
        },
        terminado: {
            type: Boolean,
            required: true
        },
        fecha: {
            type: String,
            required: true
        },
    },
    data: function(){
        return {
            
        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.course-card {
    border-radius: 7px;
    box-shadow: 0 10px 20px rgba($text-color, .1) !important;
    transition: all 300ms ease-in;
    &:hover,
    &:focus {
        box-shadow: 0 10px 40px rgba($text-color, .3) !important;
    }
}
</style>