<template>
  <div>
    <hero-section></hero-section>
    <courses-section></courses-section>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import CoursesSection from '@/components/CoursesSection.vue'

  export default {
    name: 'home-view',

    components: {
      'hero-section': HeroSection,
      'courses-section': CoursesSection
    },
    methods: {}
  }
</script>
