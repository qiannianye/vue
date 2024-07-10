<template>
    <div class="app">
        <h1>我是app组件</h1>
        <!-- <Person v-bind="person" /> -->
        <Person />
    </div>
</template>

<script lang='ts' setup name="Person">
//引入子组件Person
import Person from './components/Person.vue'
const person = {
    nmae: '张三',
    age: 20
}

</script>

<style>
    .app {
        background-color: gray;
        border: 1px solid rgb(222, 199, 244);
        margin: 20px;
    }
</style>