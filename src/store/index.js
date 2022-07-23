import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import { db } from  '@/firebase/firebase.js'
db
// import { collection, getDocs } from "firebase/firestore";
//import { getAuth, onAuthStateChanged } from 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    userError: null
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
  }
})
