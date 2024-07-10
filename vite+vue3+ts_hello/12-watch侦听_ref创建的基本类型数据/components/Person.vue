<template>
    <div class="person">
        <h2>情况一：监视【ref】创建的【基本类型】的数据</h2>
        <h3>求和为：{{ sum }}</h3>
        <button @click="add">求和</button>
        <h3>测试深度监视：旧值-{{ obj.a.b.c }}，新值-{{ obj.a.b.c }}</h3>
        <button @click="testDeepWatch">点我改变c</button>
    </div>
</template>

<script lang="ts" setup>
   import { ref, watch } from 'vue'
   let sum = ref(0)
   let obj = ref({
    a:{
        b:{
            c: 100
        }
    }
   })
   function add() {
    sum.value += 1
   }
   function testDeepWatch() {
    obj.value.a.b.c = 300
   }
   /**
    * 监视方法：
    * 第一个参数：监视的数据，直接写变量名，不需要变量名.value。
    *           注意：监视源（监视的数据），必须只能是：它可以是一个 ref (包括计算属性)、一个响应式对象（reactive）、一个 getter 函数、或多个数据源组成的数组
    * 第二个参数：监视结果的回调，有新旧两个参数。
    *           监视回调中的新旧两个参数其实就是一个值？？？ 这种说法是错误的。
    *           1、如果监视的数据是由【ref】创建的【基本类型】的数据，那么新旧值是不一样的，如果开启立即监视，最初新值（newValue）是初始化时的值，旧值（oldValue）是undefined，后续新旧值也是不一样的。
    *           2、如果监视的数据是由【ref】创建的【对象类型】的数据，那么???  
    *           3、如果监视的数据是由【reactive】创建的【对象类型】的数据，那么？？？
    * 第三个参数：配置项（包含是否开启深度（deep）监视，是否开启立即（immediate）监视等等）。
    *           1、如果监视的数据是由【reactive】创建的，那么是自动开启深度监视的。
    * 返回值stopWatch：停止监视函数。注意：一般情况下都是使用同步创建的监听器，同步创建的监听器会自动绑定在当前组件上，组件卸载时监听器会自动关闭停止。但也有特殊情况（如异步监听器），异步创建的
    *               监听器不会自动绑定在当前组件上，因此组件卸载时也不会自动关闭停止，所以需要必须手动关闭，防止内存泄露（慎用）。
    */
   const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log('@@sum 改变了，', newValue, oldValue)//这里sum是ref创建的基本类型，新旧值不一样。
    if (newValue >= 10) {
        stopWatch() 
        console.log('@@stopWatch:',stopWatch) //stopWatch是一个函数
    }
   }, {deep: true, immediate: true})
   const stopWatch2 = watch(obj, (newValue, oldValue) => {
    console.log('@@c改变了:',newValue, oldValue) //这里obj是ref创建的对象类型，改变的只是对象中的某个属性，对象地址值未改变，所以新旧值是同一个。
   }, {deep: true})
</script>

<style>
    .person {
        background-color: skyblue;
        border: 1px solid blueviolet;
        margin: 20px;
        padding: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>