import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_online: true,
    snackbar: {
      show: false,
      timeout: 10000,
      message: null
    }
  },
  actions: {
    setOffline ({ commit }) {
      commit('statusConnection', { status: false })
    },
    setOnline ({ commit }) {
      commit('statusConnection', { status: true })
    },
    setSnackbar ({ commit }, snackbar) {
      commit('setSnackbar', snackbar)
      setTimeout(() => {
        commit('closeSnackbar')
      }, 10000)
    }
  },
  mutations: {
    statusConnection (state, payload) {
      state.is_online = payload.status
    },
    setSnackbar (state, snackbar) {
      state.snackbar.message = snackbar.msg
      state.snackbar.show = snackbar.show
    },
    closeSnackbar (state) {
      state.snackbar.show = false
      state.snackbar.message = null
    }
  },
  getters: {
    is_online: state => {
      return state.is_online
    },
    snackbar: state => {
      return state.snackbar
    }
  }
})
