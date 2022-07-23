<template>
    <v-card class="py-8 px-6">
        <h2 class="text-h4 text-center">Login</h2>
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
                @click="login"
            >
                Ingresar
            </v-btn>
            <v-divider></v-divider>
        </v-form>
    </v-card>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'login-form',
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
        async login() {
            this.$refs.form.validate()
            if ( this.valid == false ) {
                this.alertError = true
                this.alertMessage = 'Ingresa los campos obligatorios'
            } else {
                this.alertError = false
                const auth = getAuth()
                try{
                    let respLog = await signInWithEmailAndPassword(auth, this.correo, this.password)
                    console.log(respLog)
                    this.$router.push('/')
                }
                catch(error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    this.alertError = true
                    this.alertMessage = 'Tu correo o contraseña son incorrectos'
                }
            }
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
h2 {
    // color: $primary-color;
}
</style>