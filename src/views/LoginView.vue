<template>
    <section class="login">
        <v-container fill-height>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4" lg="4">
                    <login-form></login-form>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
    name: 'login-view',
    data: function(){
        return {}
    },
    components: {
        'login-form': LoginForm
    }
}
</script>

<style scoped>
    
</style>