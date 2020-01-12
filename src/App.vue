<template>
    <div id="app">
        <header>
            顶部
        </header>
        <router-link to="/">主页</router-link>
        <router-link to="/list">列表页</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>