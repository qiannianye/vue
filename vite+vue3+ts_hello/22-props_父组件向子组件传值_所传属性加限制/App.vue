<template>
    <div class="app">
        <h1>我是app组件，props传值</h1>
        <!-- <Person :list="persons"/> -->
        <!-- 假设父组件不小心传错了，list传了一个普通类型5, 那么
            1、若子组件没有做类型限定，父组件这里不会报错提示传错了，
            子组件接收的时候虽然接收的是5，但是依然能循环5次，但数据不对。这样就会导致出错且难排查出错误，所以子组件需要加类型限定。
            2、如果子组件做了类型限定，父组件:list传错时，list属性会飘红提示报错，类型不匹配，这样容易定位到问题。
         -->
        <!-- <Person :list="5"/> -->
        <!-- 类型限定的传值: 子组件限定list属性是必传时，如果父组件不传list，那么下面的这句代码就会飘红报错 -->
        <!-- <Person /> -->
        <!-- 类型限定的传值：子组件限定list属性是非必传时，如果父组件不传list，那么下面的这句代码OK，且子组件也不会报错，也不会渲染list。 -->
        <!-- <Person /> -->
        <Person :list="persons" />
    </div>
</template>

<script lang='ts' setup name="Person">
//引入子组件Person
import Person from './components/Person.vue'
import { ref, reactive } from 'vue'
import type { PersonList } from './types';
// 未做类型限定时，即使写错了属性(比如name写成nmae），也不提示报错，导致容易出错，且很难排查错误，所以父组件要传递给子组件的值，最好也要加类型限定！！！
// const persons = ref([{id: '001', nmae: '张三', age: 18}, {id: '002', name: '李四', age: 20}])

// 父组件将传递给子组件的值加上类型限定，这样父组件的值在写错属性的时候也能及时发现错误，编译器也会提示报错，容易排查错误信息。
const persons = reactive<PersonList>([{id: '001', name: '张三', age: 18}, {id: '002', name: '李四', age: 20}])
</script>

<style>
    .app {
        background-color: gray;
        border: 1px solid rgb(222, 199, 244);
        margin: 20px;
    }
</style>