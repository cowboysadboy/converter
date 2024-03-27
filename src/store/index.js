import { createStore } from 'vuex'
import axios from 'axios';

export const useStore = createStore({
    state: {
        baseValue: 'RUB',
        currency: {}
    },
    getters: {
        getCurrency(state) {
            return state.currency?.data?.conversion_rates
        },
    },
    mutations: {
        changeCurrency(state, currency) {
            state.currency = currency
        }
    },
    actions: {
        async fetchCurrency(ctx, value) {
            const response = await axios.get('https://v6.exchangerate-api.com/v6/21f20c6fec891d7008b1af2f/latest/' + value)
            ctx.commit('changeCurrency', response)
        }
    },
})