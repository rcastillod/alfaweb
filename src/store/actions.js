import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from  '@/firebase/firebase.js'

const actions = {
    
    async registerAction({commit}, userData) {    
        try{
            const auth =  getAuth()
            let respReg = await createUserWithEmailAndPassword(auth, userData.correo, userData.password)
            commit('SET_USER', respReg)
        }
        catch(error) {
            commit('SET_USER_ERROR', error.message)
        }
        
    },
    async loginAction({commit}, userData) {
        try {
            const auth =  getAuth()
            let respLog = await signInWithEmailAndPassword(auth, userData.correo, userData.password)
            commit('SET_USER', respLog)
        }
        catch(error) {
            commit('SET_USER_ERROR', error.message)
        }
    },
    async logoutAction({commit}) {
        try {
            const auth =  getAuth()
            signOut(auth)
            commit('SET_USER', null)
        }
        catch(error) {
            commit('SET_USER_ERROR', error.message)
        }
    },

    async fetchCoursesAction({commit}) {
        try {
            const querySnapshot = await getDocs(collection(db, 'cursos'))
            commit('CLEAN_COURSES')
            querySnapshot.forEach((doc) => {
                commit('SET_COURSES', doc)
            })
        }
        catch(error) {
            console.log(error)
        }
    }

}

export default actions