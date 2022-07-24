import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import { db } from  '@/firebase/firebase.js'
db
// import { collection, getDocs } from "firebase/firestore";
//import { getAuth, onAuthStateChanged } from 'firebase/auth'

Vue.use(Vuex)
const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  reducer: (state) => ({user: state.user}),
  storage: window.localStorage,
})

export default new Vuex.Store({
  state: {
    user: null,
    userError: null
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
