import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// Vuex persist config
const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  reducer: (state) => ({user: state.user}),
  storage: window.localStorage,
})

export default new Vuex.Store({
  state: {
    user: null,
    userError: null,
    courses: [],
    coursesError: null,
    loader: true
  },
  getters,
  mutations,
  actions,
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
