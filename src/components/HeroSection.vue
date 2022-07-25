<template>
    <section class="py-16">
        <v-container>
            <v-row align="center">
                <v-col cols="12" md="5">
                    <span class="divider"></span>
                    <h1 class="text-h4 font-weight-light accent--text mb-4">Bienvenido a <span class="d-block">CODE.ACADEMY</span></h1>
                    <p class="hero-text font-weight-light ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tempora cumque facere voluptates, corrupti odio eos qui aliquam facilis quisquam.</p>
                </v-col>
                <v-col cols="12" md="7">
                    <img
                        class="hero-img"
                        src="../assets/img/hero-img.svg" 
                        alt="Study"
                        width="90%">
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'hero-section',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
.hero-text {
    line-height: 1.7;
}
.hero-img {
    animation: float 2.5s ease infinite alternate both;
}
@keyframes float {
    from {
        transform: translateY(-15px);
    }
}
</style>