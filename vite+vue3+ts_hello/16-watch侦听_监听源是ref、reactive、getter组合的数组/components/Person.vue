<template>
    <div class="person">
        <h2>情况五：【ref、reatcive、getter】创建的数据的数组的监听</h2>
        <h3>姓名：{{ person.name }}  年龄：{{ person.age }}</h3>
        <!-- car是数组时 -->
        <li v-for="c in person.car" :key="c.id">{{ c.name }}</li>
        <h3>求和：{{ sum }}</h3>
        <button @click="changeName">修改名字</button>
        <button @click="changeCar">修改车</button>
        <button @click="add">点我+1</button>
    </div>
</template>

<script lang="ts" setup>
   import { reactive, watch, ref } from 'vue'
   let sum = ref(0)
   let person = reactive({
    name: '张三',
    age: 18,
    car: [{id: 1,name: '奔驰',price: 100},{id: 2,name: '宝马',price: 200}], //car是数组
   })
   function changeName() {
    person.name += '#'
    // person.value.name += '#'
   }
   function changeCar() {
    //情况-：整个更改【响应式对象】中某个属性（该属性是对象属性时）时，不开启深度监视，也能监听到变化。
    // person.car = [{id: 99, name: '劳斯莱斯', price: 1000}, {id: 100, name: '法拉利', price: 1200}] 

    //情况二：//更改【响应式对象】中某个属性（该属性是对象属性时）的某个值时，必须开启深度监视
    // person.car[0].name = '大众' //reactive
    // person.value.car[0].name = '大众' //ref
    person.car[0] = {id: 11, name: '大众', price: 45}
   }
   function add() {
    sum.value += 1
   }
  
   /**
    * 同时监听多个数据，当监听源是数组时，
    * 1、开启immediate立即监听时，新值是数组中每项的初始值，旧值不再是undefined，而是空数组，即[]。
    * 2、当监听源数组中的某一项是某个【响应式对象】的某个【对象属性】的时候，【必须】【开启】【深度监视】才能监听到变化。即deep: true。
    * 3、【响应式对象】：ref或者reactive创建的对象，或者是由ref或reactvie创建的数据计算出来的计算属性。
    */
   // person是由reactive创建的
   watch([() => person.car, sum, ()=> person.name], (newValue, oldValue) => {
        console.log('@@监听多个数据改变了：', newValue, oldValue)
   }, {immediate: true, deep: true})

   // person是由ref创建的
//    watch([() => person.value.car, sum, ()=> person.value.name], (newValue, oldValue) => {
//         console.log('@@监听多个数据改变了：', newValue, oldValue)
//    }, {immediate: true, deep: true})
   
</script>

<style scoped>
    /* scoped: 局部样式标记，代表style里的样式只在本文件内生效，与其他文件里的同名样式互不干扰。 */
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