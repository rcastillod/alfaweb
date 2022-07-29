<template>
    <section class="courses-edition">
        <div class="heading-title py-5">
            <v-container>
                <v-row justify="space-between">
                    <v-col cols="12" class="d-flex flex-column flex-sm-row justify-space-between">
                        <h3 class="text-h5 text-uppercase">Editando: {{nameCourse}}</h3>
                        <v-btn
                            color="primary"
                            class="mt-4 mt-sm-0 align-self-start"
                            @click="toCourses"
                        >
                            <v-icon left>
                                mdi-arrow-left
                            </v-icon>
                        Volver a cursos
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="form-wrapper py-16">
            <v-container>
                <v-row>
                    <v-form
                        v-model="valid"
                        ref="form">
                        <v-container>
                            <v-alert
                                :value="alert"
                                :color="alertColor"
                                :icon="alertIcon"
                                class="mb-15"
                                outlined
                                text
                            >
                                <div>{{alertMessage}}</div>
                            </v-alert>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="editedCourseField.curso"
                                        :rules="courseRules"
                                        dense
                                        label="Curso"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="editedCourseField.imagen"
                                        :rules="imagenRules"
                                        dense
                                        label="Imagen del Curso"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        v-model.number="editedCourseField.cupos"
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
                                        v-model.number="editedCourseField.inscritos"
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
                                        v-model="editedCourseField.duracion"
                                        :rules="duracionRules"
                                        dense
                                        label="Duración"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        v-model="editedCourseField.costo"
                                        :rules="costoRules"
                                        dense
                                        label="Costo"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        v-model="editedCourseField.descripcion"
                                        :rules="descripcionRules"
                                        dense
                                        label="Descripción"
                                        outlined
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-switch
                                        v-model="editedCourseField.terminado"
                                        :label="`Terminado: ${editedCourseField.terminado == false ? 'No' : 'Si'}`"
                                    ></v-switch>
                                </v-col>
                                <v-col cols="12" class="text-center">
                                    <v-btn
                                        color="primary"
                                        dark
                                        class="mb-2"
                                        @click="editCourse"
                                    >
                                        Guardar
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script>
import { db } from  '@/firebase/firebase.js'
import { doc, setDoc, getDoc } from "firebase/firestore"
import { mapState } from 'vuex'

export default {
    name: 'course-edition',
    data: function(){
        return {
            valid: false,
            alert: false,
            alertMessage: '',
            alertIcon: 'mdi',
            alertColor: '',
            courseId: this.$route.params.id,
            editedCourseResponse: '',
            editedCourseField: {
                curso: '',
                imagen: '',
                cupos: '',
                inscritos: '',
                duracion: '',
                costo: '',
                descripcion: '',
                terminado: false,
                fecha: '',
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
        }
    },
    computed: {
        ...mapState(['courses']),
        course() {
            return this.courses.find( (course) => course.id === this.courseId )
        },
        nameCourse() {
            if ( this.editedCourseField != undefined ) {
                return this.editedCourseField.curso
            }
            return ''
        }
    },
    methods: {
        async editCourse() {
            this.$refs.form.validate()
            if ( this.valid == false ) {
                this.alert = true
                this.alertMessage = 'Por favor corrige los errores'
                this.alertIcon = 'mdi-alert-circle-outline'
                this.alertColor = 'red'
            } else {
                try {
                    await setDoc(doc(db, 'cursos', this.courseId), this.editedCourseField)
                    this.alert = true
                    this.alertMessage = 'El curso ha sido editado con éxito'
                    this.alertIcon = 'mdi-alert-circle-outline'
                    this.alertColor = 'green'
                }
                catch(error) {
                    console.log(error)
                }
            }
        },
        async fetchCourseById() {
            const docRef = doc(db, 'cursos', this.courseId)
            let response = await getDoc(docRef)
            this.editedCourseField = response.data()
        },
        ruleInscripcion() {
            if ( this.editedCourseField.inscritos > this.editedCourseField.cupos ) return 'El numero de inscritos no puede ser mayor al de cupos'
            return true
        },
        toCourses() {
            this.$router.push('/courses')
        }
    },
    watch: {
        course(value) {
            if ( value == undefined ) {
                this.fetchCourseById()
            } else {
                this.editedCourseField = value
            }
        }
    },
    created() {
        this.editedCourseField = this.course
    }
}
</script>

<style scoped>
    
</style>