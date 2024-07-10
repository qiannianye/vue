<template>
    <div class="app">
        <h1>我是app组件</h1>
        <Person />
    </div>
</template>

<script lang='ts'>
//引入子组件Person
import Person from './components/Person.vue'
export default {
    name: 'App', //暴露的组件名字
    components: {
        Person
    }, //注册组件
}
</script>

<style>
    .app {
        background-color: gray;
        border: 1px solid rgb(222, 199, 244);
        margin: 20px;
    }
</style>