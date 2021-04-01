import Vue from 'vue'
import Vuex from 'vuex'
import Proyectos from './Proyectos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: {
      mainDark: '#293241',
      secondDark: '#3d5a80',
      mainLight: '#e0fbfc',
      secondLight: '#98c1d9',
      mainHighlight: '#ee6c4d'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Proyectos
  }
})
