<template>
    <div>
        <heading-section title="Administración de Cursos"></heading-section>
        <courses-table></courses-table>
    </div>
</template>

<script>
import HeadingSection from '@/components/HeadingSection.vue'
import CoursesTable from '@/components/CoursesTable.vue'

export default {
    name: 'courses-view',
    data: function(){
        return {}
    },
    components: {
        'heading-section': HeadingSection,
        'courses-table': CoursesTable
    }
}
</script>

<style scoped>
    
</style>