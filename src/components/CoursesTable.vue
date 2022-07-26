<template>
    <section class="courses-table">
        <div class="heading-title py-5">
            <v-container>
                <v-row justify="space-between">
                    <v-col cols="12" class="d-flex flex-column flex-sm-row justify-space-between">
                        <h3 class="text-h5 text-uppercase">Listado de Cursos</h3>
                        <v-dialog
                            v-model="dialog"
                            max-width="500px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="primary"
                                    dark
                                    class="mt-4 mt-sm-0 align-self-start"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Agregar Curso
                                </v-btn>
                            </template>
                            <v-card class="py-8">
                                <v-card-title>
                                    <span class="text-h5 text--primary">Nuevo Curso</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-alert
                                        :value="alertError"
                                        color="red"
                                        icon="mdi-alert-circle-outline"
                                        outlined
                                    >
                                        <div>{{alertErrorMessage}}</div>
                                    </v-alert>
                                    <v-form
                                        v-model="valid"
                                        ref="form">
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field
                                                        v-model="newCourseField.curso"
                                                        :rules="courseRules"
                                                        dense
                                                        label="Curso"
                                                        outlined
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field
                                                        v-model="newCourseField.imagen"
                                                        :rules="imagenRules"
                                                        dense
                                                        label="Imagen del Curso"
                                                        outlined
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field
                                                        v-model.number="newCourseField.cupos"
                                                        :rules="cuposRules"
                                                        dense
                                                        label="Cupos"
                                                        outlined
                                                        min="0"
                                                        type="number"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field
                                                        v-model.number="newCourseField.inscritos"
                                                        :rules="[ruleInscripcion]"
                                                        dense
                                                        label="Inscritos"
                                                        outlined
                                                        min="0"
                                                        type="number"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field
                                                        v-model="newCourseField.duracion"
                                                        :rules="duracionRules"
                                                        dense
                                                        label="Duración"
                                                        outlined
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field
                                                        v-model="newCourseField.costo"
                                                        :rules="costoRules"
                                                        dense
                                                        label="Costo"
                                                        outlined
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-textarea
                                                        v-model="newCourseField.descripcion"
                                                        :rules="descripcionRules"
                                                        dense
                                                        label="Descripción"
                                                        outlined
                                                    ></v-textarea>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    outlined
                                    @click="close"
                                >
                                    Cancelar
                                </v-btn>
                                <v-btn
                                    color="primary"
                                    dark
                                    @click="addNewCourse"
                                >
                                    Guardar
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="courses-wrapper py-16">
            <v-container>
                <v-alert
                    v-if="alertSuccess"
                    text 
                    type="success" 
                    icon="mdi-book-check-outline">
                    {{alertSuccessMessage}}
                </v-alert>
                <v-row>
                    <v-col>
                        <v-data-table
                            :headers="headers"
                            :items="courses"
                            :disable-sort="true"
                            :hide-default-footer="true"
                            :loading="loader"
                            loading-text="Cargando cursos... Por favor espere"
                        >
                            <template v-slot:top>
                                <v-dialog 
                                    v-model="dialogDelete" 
                                    max-width="500px"
                                >
                                    <v-card class="py-8">
                                        <v-card-title class="text-h6 text--primary text-center">¿Estas seguro que deseas eliminar este curso?</v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" outlined @click="closeDelete">Cancelar</v-btn>
                                            <v-btn color="primary" @click="deleteCourseConfirm">Eliminar</v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </template>
                            <template v-slot:[`item.terminado`]="{ item }">
                                <v-chip
                                    :color="terminadoColor(item.terminado)"
                                    dark
                                >
                                    {{ item.terminado == false ? 'No' : 'Si' }}
                                </v-chip>
                            </template>
                            <template v-slot:[`item.acciones`]="{ item }">
                                <router-link :to="{name: 'editcourse', params: {id: item.id}}">
                                    <v-btn
                                        class="mr-2"
                                        color="secondary"
                                        elevation="2"
                                        fab
                                        small
                                    >
                                        <v-icon
                                            color="primary"
                                            small
                                        >
                                            mdi-pencil
                                        </v-icon>
                                    </v-btn>
                                </router-link>
                                <v-btn
                                    color="red"
                                    dark
                                    elevation="2"
                                    fab
                                    small
                                >
                                    <v-icon
                                        dark
                                        small
                                        @click="deleteCourse(item)"
                                    >
                                        mdi-trash-can-outline
                                    </v-icon>
                                </v-btn>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <h4 class="text--primary my-5">Información general</h4>
                        <courses-info></courses-info>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CoursesInfo from './CoursesInfo.vue'
import { db } from  '@/firebase/firebase.js'
import { doc, collection, addDoc, deleteDoc } from "firebase/firestore";

export default {
    name: 'courses-table',
    data: () => ({
        valid: false,
        alertError: false,
        alertErrorMessage: '',
        alertSuccess: false,
        alertSuccessMessage: '',
        dialog: false,
        dialogDelete: false,
        deleteCourseId: null,
        terminadoText: '',
        headers: [
            { text: 'Curso', value: 'curso' },
            { text: 'Cupos', value: 'cupos' },
            { text: 'Inscritos', value: 'inscritos' },
            { text: 'Duración', value: 'duracion' },
            { text: 'Costo', value: 'costo' },
            { text: 'Terminado', value: 'terminado' },
            { text: 'Fecha', value: 'fecha' },
            { text: 'Acciones', value: 'acciones', sortable: false },
        ],
        newCourseField: {
            curso: null,
            imagen: null,
            cupos: null,
            inscritos: null,
            duracion: null,
            costo: null,
            descripcion: null,
            terminado: false,
            fecha: null,
        },
        defaultCourseField: {
            curso: null,
            imagen: null,
            cupos: null,
            inscritos: null,
            duracion: null,
            costo: null,
            descripcion: null,
        },
        courseRules: [
            v => !!v || 'El nombre es obligatorio',
            v => (v && v.length >= 1) || 'El nombre del curso debe al menos tener una letra',
        ],
        imagenRules: [
            v => !!v || 'La imagen es obligatoria',
            v => (v && v.length >= 1) || 'El nombre del curso debe al menos tener una letra',
        ],
        descripcionRules: [
            v => !!v || 'La descripción es obligatoria',
            v => (v && v.length >= 30) || 'La descripción debe al menos tener 30 caracteres',
        ],
        cuposRules: [ v => !!v || 'Los cupos son obligatorios' ],
        duracionRules: [ v => !!v || 'La duración es obligatoria' ],
        costoRules: [ v => !!v || 'El costo es obligatorio' ]
        
    }),

    computed: {
        ...mapState([
            'courses', 
            'loader', 
        ]),
        getDate() {
            let date = new Date().toLocaleDateString()
            return date
        },
        newCourse() {
            return {...this.newCourseField, fecha:this.getDate}
        }
    },

    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },

    methods: {
        ...mapActions(['fetchCoursesAction']),
        async addNewCourse() {
            this.$refs.form.validate()
            if ( this.valid == false ) {
                this.alertError = true
                this.alertErrorMessage = 'Por favor ingresa todos los campos!'
            } else {
                try {
                    await addDoc(collection(db, 'cursos'), this.newCourse)
                    this.close()
                    this.alertSuccess = true,
                    this.alertSuccessMessage = 'El curso se ha agregado con éxito!'
                    this.fetchCoursesAction()
                }
                catch(error) {
                    console.log(error)
                }
            }
        },

        deleteCourse (item) {
            let deleteCourseId = this.courses.find( course => course.id === item.id)
            this.deleteCourseId = deleteCourseId.id
            this.dialogDelete = true
        },

        async deleteCourseConfirm () {
            try {
                await deleteDoc( doc(db, "cursos", this.deleteCourseId))
                this.closeDelete()
                this.alertSuccessMessage = "El curso ha sido eliminado con éxito!"
                this.alertSuccess = true
                this.fetchCoursesAction()
            }
            catch(error) {
                console.log(error)
            }
            this.closeDelete()
        },

        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.newCourseField = Object.assign({}, this.defaultCourseField)
            })
        },

        closeDelete () {
            this.dialogDelete = false
        },

        ruleInscripcion() {
            if ( this.newCourseField.inscritos > this.newCourseField.cupos ) {
                return 'El numero de inscritos no puede ser mayor al de cupos'
            }
        },

        terminadoColor(terminado) {
            if ( terminado == false ) {
                return 'green'
            } else {
                return 'red'
            }
        },
    },

    components: {
        'courses-info': CoursesInfo
    }
}
</script>

<style scoped>
    
</style>