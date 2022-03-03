import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('theme', {
    state: () => {
        return {
            theme: 'light',
        }
    },
    actions: {
        setTheme(state, payload) {
            state.theme = payload
        }
    },
    persist: 'true'
})
