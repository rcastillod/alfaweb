<template>
    <div>
        <heading-section></heading-section>
        <courses-table></courses-table>
    </div>
</template>

<script>
import HeadingSection from '@/components/HeadingSection.vue'
import CoursesTable from '@/components/CoursesTable.vue'

export default {
    name: 'courses-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'heading-section': HeadingSection,
        'courses-table': CoursesTable
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>