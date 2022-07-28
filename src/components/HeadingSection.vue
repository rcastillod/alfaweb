<template>
    <section class="heading py-10 white">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <span class="divider"></span>
                    <h1 class="text-h4 font-weight-light accent--text mb-4">{{title}}</h1>
                    <p class="hero-text font-weight-light ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tempora cumque facere voluptates, corrupti odio eos qui aliquam facilis quisquam.</p>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'heading-section',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data: function(){
        return {}
    }
}
</script>

<style scoped>
</style>