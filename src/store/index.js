import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }

      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUsre = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data: { profile }, statusText } = await usersAPI.getCurrentUser()


        if (statusText === 'error') {
          throw new Error(statusText)
        }

        console.log('profile', profile)

        commit('setCurrentUser', {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.image,
          isAdmin: profile.isAdmin
        })

        return true
      } catch (error) {
        console.error('haha error', error.message)
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
