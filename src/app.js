import Vue from 'vue'
import App from './App.vue'

import createRouter from './route'
import createStore from './store'

// 为了兼容服务端，需要把这个方法改成函数
// 创建实例的函数
export default () => {
    let router = createRouter()
    let store = createStore()

    let app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    
    return { app, router, store }
}