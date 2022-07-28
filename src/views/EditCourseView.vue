<template>
    <div>
        <heading-section title="Edición de curso"></heading-section>
        <course-edition></course-edition>
    </div>
</template>

<script>
import HeadingSection from '@/components/HeadingSection.vue'
import CourseEdition from '@/components/CourseEdition.vue'

export default {
    name: 'edit-course',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'heading-section': HeadingSection,
        'course-edition': CourseEdition
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>