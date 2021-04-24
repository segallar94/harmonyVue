import { createStore, createLogger } from 'vuex'
import pianoKeys from '@/utils/constants.js'

export default createStore({
  state: {
    keys: [...pianoKeys],
  },
  getters: {
    keys(state) {
      return state.keys;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
