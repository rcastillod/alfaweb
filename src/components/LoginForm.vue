<template>
    <v-card 
        class="form-card py-10 px-5"
        color="rgba(255,255,255,.2)"
        elevation="0">
        <h2 class="text-h4 text-center primary--text">Login</h2>
        <v-alert
            :value="alertError"
            class="my-5"
            color="red"
            icon="mdi-alert-circle-outline"
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
                type="password"
            ></v-text-field>

            <div cols="12" class="d-flex justify-center mt-5">
                <v-btn
                    depressed
                    color="primary"
                    dark
                    @click="login"
                >Ingresar</v-btn>
            </div>
            <v-divider class="my-5"></v-divider>
            <div cols="12" class="d-flex justify-center">
                <div class="text-caption primary--text">¿Aun no tiene una cuenta?</div>
                <div 
                    class="text-caption font-weight-bold primary--text ml-2 sign-link" 
                    @click="toRegister">
                    Regístrate
                </div>
            </div>
        </v-form>
    </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'login-form',
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
    computed: { ...mapState(['userError']) },
    methods: {
        ...mapActions(['loginAction']),
        login() {
            this.$refs.form.validate()
            if( this.valid == false ) {
                this.alertError = true
                this.alertMessage = 'Por favor ingresa todos los campos'
            } else {
                this.loginAction({correo: this.correo, password: this.password})
                .then(() => this.$router.push('/'))
            }
        },
        toRegister() {
            this.$router.push('/register')
        }
    }
}
</script>

<style scoped lang="scss">

</style>