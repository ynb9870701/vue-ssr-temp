import createApp from './app'

// 服务端会调用此函数，返回一个新的app实例
export default (context) => {
    return new Promise((resolve, reject) => {
        let { app, router, store } = createApp()
        // 路由跳转
        router.push(context.url)

        // 如果服务端 启动时 直接访问 /list  返回的页面永远都是 index.html 需要通过路由跳转到指定路径
        // 为了防止路由中的异步逻辑 所以采用 promise的形式 等待路由加载完成后 返回vue实例，服务端才可以渲染出完整的页面
        router.onReady(() => {
            // 获取到当前匹配到的组件 看这个组件中是否有asyncData方法 有则执行
            let matchesComponents = router.getMatchedComponents()
            Promise.all(matchesComponents.map(component => {
                if (component.asyncData) {
                    return component.asyncData({ store })
                }
            })).then(() => {
                // 把vuex状态挂载到 上下文中的state中
                context.store = store.state
                // 会自动在window上挂载一个__INITIAL_STATE__属性
                resolve(app)
            }).catch(err => {
                console.log('err----', err)
            })
        })
    })
}