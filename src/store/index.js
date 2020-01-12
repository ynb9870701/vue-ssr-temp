import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
    let store = new Vuex.Store({
        state: {
            userName: 'picasso'
        },
        mutations: {

        },
        actions: {
            
        }
    })

    return store
}