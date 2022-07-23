import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const actions = {
    
    async registerAction({commit}, payload) {    
        const auth = getAuth()
        try{
            let respReg = await createUserWithEmailAndPassword(auth, payload.correo, payload.password)
            commit('SET_USER', respReg)
        }
        catch(error) {
            commit('SET_USER_ERROR', error.message)
        }
        
    },
    async loginAction({commit}, payload) {
        const auth = getAuth()
        try {
            let respLog = await signInWithEmailAndPassword(auth, payload.correo, payload.password)
            commit('SET_USER', respLog)
        }
        catch(error) {
            commit('SET_USER_ERROR', error.message)
        }
    },

}

export default actions