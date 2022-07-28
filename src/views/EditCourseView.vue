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
    data: function(){
        return {}
    },
    components: {
        'heading-section': HeadingSection,
        'course-edition': CourseEdition
    }
}
</script>

<style scoped>
    
</style>