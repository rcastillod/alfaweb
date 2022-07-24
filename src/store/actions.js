import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const actions = {
    
    async registerAction({commit}, userData) {    
        const auth = getAuth()
        try{
            let respReg = await createUserWithEmailAndPassword(auth, userData.correo, userData.password)
            commit('SET_USER', respReg)
        }
        catch(error) {
            commit('SET_USER_ERROR', error.message)
        }
        
    },
    async loginAction({commit}, userData) {
        const auth = getAuth()
        try {
            let respLog = await signInWithEmailAndPassword(auth, userData.correo, userData.password)
            commit('SET_USER', respLog)
        }
        catch(error) {
            commit('SET_USER_ERROR', error.message)
        }
    },

}

export default actions