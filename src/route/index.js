import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home.vue'
import List from '../components/list.vue'

Vue.use(VueRouter)

export default () => {
    let router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/list',
                component: List
            }
        ]
    })

    return router
}