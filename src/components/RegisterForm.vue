<template>
    <v-card class="py-8 px-6">
        <h2 class="text-h4 text-center">Registro</h2>
        <v-alert
            :value="alertError"
            color="red"
            icon="mdi-circle-outline"
            outlined
            text
        >
            <div>{{alertMessage}}</div>
        </v-alert>
        <v-form
            ref="form"
            v-model="valid"
        >
            <v-text-field
                v-model="correo"
                :rules="correoRules"
                label="Correo"
                required
                append-icon="mdi-account-outline"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :rules="passRules"
                label="Contraseña"
                required
                append-icon="mdi-key-outline"
            ></v-text-field>

            <v-btn
                color="success"
                class="mr-4"
                @click="register"
            >
                Registrar
            </v-btn>
            <v-divider class="my-5"></v-divider>
            <div class="log-link d-flex justify-center text-body-2 font-weight-light">
                ¿Ya tienes una cuenta?
                <a 
                    class="font-weight-medium ml-1"
                    @click="toLogin"    
                >Iniciar Sesión</a>
            </div>
        </v-form>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'register-form',
    // props: {},
    data: function(){
        return {
            valid: false,
            alertError: false,
            alertMessage: '',
            correo: '',
            correoRules: [
                v => !!v || 'El correo es obligatorio',
                v => /.+@.+\..+/.test(v) || 'Debes ingresar un correo valido',
            ],
            password: '',
            passRules: [
                v => !!v || 'La contraseña es obligatoria',
                v => (v && v.length >= 6) || 'La contraseña debe tener al menos 6 caracteres',
            ],
        }
    },
    // computed: {},
    methods: {
        ...mapActions(['registerAction']),
        register() {
            this.registerAction({correo: this.correo, password: this.password})
            this.$router.push('/')
        },
        toLogin() {
            this.$router.push('/login')
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">

</style>