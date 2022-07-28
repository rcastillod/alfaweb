<template>
    <section class="register">
        <v-container fill-height>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4" lg="4">
                    <register-form></register-form>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
    name: 'register-view',
    // props: {},
    data: function(){
        return {}
    },
    components: {
        'register-form': RegisterForm
    }
}
</script>

<style scoped>
    
</style>