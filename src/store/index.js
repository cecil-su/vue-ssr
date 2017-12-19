import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export function createStore () {
  console.log('create store')
  return new Vuex.Store({
    state: {
      activeType: null
    }
  })
}