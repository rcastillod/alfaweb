<template>
    <section class="courses">
        <div class="heading-title py-5">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h3 class="text-h5 text-uppercase">Cursos Disponibles</h3>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="courses-wrapper py-16">
            <v-container>
                <v-row>
                    <v-col 
                        cols="12" sm="6" md="4"
                        v-for="(course, index) in courses"
                        :key="index">
                        <course-card
                            :id="course.id"
                            :imagen="course.imagen"
                            :curso="course.curso"
                            :descripcion="course.descripcion"
                            :cupos="course.cupos"
                            :inscritos="course.inscritos"
                            :duracion="course.duracion"
                            :costo="course.costo"
                            :terminado="course.terminado"
                            :fecha="course.fecha"
                        ></course-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import CourseCard from '@/components/CourseCard.vue'

export default {
    name: 'card-section',
    data: function(){
        return {
            
        }
    },
    computed: {
        ...mapState(['courses'])
    },
    components: {
        'course-card': CourseCard
    }
}
</script>

<style scoped lang="scss">
</style>