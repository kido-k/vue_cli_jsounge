import * as baseStore from '@/store'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store.js', () => {
  describe('mutations', () => {
    test('increment', () => {
      const store = new Vuex.Store({ ...baseStore })
      expect(store.state.count).toBe(0)
      store.commit('increment')
      expect(store.state.count).toBe(1)
    })
    test('decrement', () => {
      const store = new Vuex.Store({ ...baseStore })
      expect(store.state.count).toBe(0)
      store.commit('decrement')
      expect(store.state.count).toBe(-1)
    })
  })
})
