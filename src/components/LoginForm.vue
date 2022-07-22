<template>
    <v-card class="py-8 px-6">
        <h2 class="text-h4 text-center">Login</h2>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Correo"
                required
                append-icon="mdi-account-outline"
            ></v-text-field>

            <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Contraseña"
                required
                append-icon="mdi-key-outline"
            ></v-text-field>
    
    
            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
            >
                Ingresar
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'login-form',
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
h2 {
    color: $primary-color;
}
</style>