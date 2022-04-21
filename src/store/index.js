import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banks: [],
    bank: [],
    payment: []
  },
  mutations: {
    ADD_NEW_BANK (state, payload) {
      state.banks.push(payload)
    },
    DELETE_BANK (state, id) {
      state.banks = state.banks.filter(item => item._id !== id)
    },
    CREDIT_CALCULATE (state, payload) {
      console.log(payload)
      state.bank = state.banks.filter(item => item.bank_name === payload.bank_name)
      var payments
      if (payload.bank_name <= state.bank[0].bank_name && payload.Down_payment >= state.bank[0].min_payment && payload.Initial_loan <= state.bank[0].max_loan) {
        var rate1 = 1 + (state.bank[0].interest_rate / 12)
        payments = Math.floor((payload.Initial_loan * (state.bank[0].interest_rate / 12) *
                    Math.pow(rate1, state.bank[0].loan_term)) / (Math.pow(rate1, state.bank[0].loan_term) - 1))
      } else {
        payments = 'Перевірте коректність введених даних'
      }
      state.payment.push(payments)
    },
    UPDATE_BANK (state, { id, interestRate }) {
      const idx = state.banks.findIndex(bank => bank._id === id)
      const bank = state.banks[idx]
      state.banks[idx] = { ...bank, interest_rate: interestRate }
    }
  },
  actions: {
    addNewBank ({ commit }, payload) {
      commit('ADD_NEW_BANK', payload)
    },
    deleteBank ({ commit }, id) {
      commit('DELETE_BANK', id)
    },
    creditCalculate ({ commit }, payload) {
      commit('CREDIT_CALCULATE', payload)
    },
    updateBank ({ commit }, payload) {
      commit('UPDATE_BANK', payload)
    }
  },
  modules: {
  }
})
