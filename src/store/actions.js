import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from  '@/firebase/firebase.js'

const actions = {
    
    registerAction({commit}, userData) {    
        commit('SET_USER', userData)
    },

    loginAction({commit}, userData) {
        commit('SET_USER', userData)
    },

    async logoutAction({commit}) {
        const auth =  getAuth()
        try {
            await signOut(auth)
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
            commit('SET_COURSE_ERROR', error.message)
        }
    }

}

export default actions