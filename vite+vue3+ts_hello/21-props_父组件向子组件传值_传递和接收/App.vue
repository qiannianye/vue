<template>
    <div class="app">
        <h1>我是app组件，props传值</h1>
        <!-- 1、传递字面量值，即静态值 -->
        <!-- <Person a="哈哈" b="嘿嘿"/> -->
        <!-- 2、传递变量，即动态值 -->
        <Person a="哈哈" b="嘿嘿" :c="x" :person="person" :list="persons"/>
    </div>
</template>

<script lang='ts' setup name="Person">
//引入子组件Person
import Person from './components/Person.vue'
import { ref } from 'vue'
const x = ref(100)
const person = {
    name: '张三',
    age: 18
}
const persons = [{id: '001', name: '张三', age: 18}, {id: '002', name: '李四', age: 20}]

</script>

<style>
    .app {
        background-color: gray;
        border: 1px solid rgb(222, 199, 244);
        margin: 20px;
    }
</style>