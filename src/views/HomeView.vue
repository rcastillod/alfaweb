<template>
  <div>
    <hero-section></hero-section>
    <courses-section></courses-section>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import CoursesSection from '@/components/CoursesSection.vue'
//import { mapActions } from 'vuex'

  export default {
    name: 'home-view',

    components: {
      'hero-section': HeroSection,
      'courses-section': CoursesSection
    },
    methods: {
      //...mapActions(['fetchCoursesAction'])
    },
    created() {
      //this.fetchCoursesAction()
    }
  }
</script>
