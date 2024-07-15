<template>
    <div class="app">
        <h1>我是app组件，vue的路由测试</h1>
        <div class="navigator">
            <!-- 设置active-class，当点击的时候会自动高亮 -->
            <RouterLink class="title" to="/home" active-class="active">首页</RouterLink>
            <RouterLink class="title" to="/news" active-class="active">新闻</RouterLink>
            <!-- to：字符串写法, 普通字符串，只能静态 -->
            <!-- <RouterLink class="title" to="/about" active-class="active">关于</RouterLink> -->
            <!-- to：字符串写法, 模板字符串，可动态 -->
            <!-- <RouterLink class="title" :to="`/about`" active-class="active">关于</RouterLink> -->
            <!-- to：对象写法, 使用path -->
            <!-- <RouterLink class="title" :to="{ path: '/about'}" active-class="active">关于</RouterLink> -->
            <!-- to: 对象写法，使用name -->
            <RouterLink class="title" :to="{ name: 'guanyu'}" active-class="active">关于</RouterLink>
        </div>
        <div class="content">
            <!-- 使用RouterLink跳转的时候，需要使用RouterView占位，告诉路由器要展示的内容在这里展示 -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang='ts' setup>
    // RouterLink, RouterView 可以不需要引入，直接在template中使用
    import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
    .app {
        background-color: gray;
        border: 1px solid rgb(222, 199, 244);
        margin: 20px;
    }
    .navigator {
        display: flex;
        justify-content: center;
    }
    .navigator .title {
        text-align: center;
        flex: 1;
    }
    .navigator .active {
        color: aquamarine;
    }
    .content {
        text-align: center;
        height: 500px;
        background: lightblue;
        margin-top: 10px;
        padding: 10px;
    }
</style>