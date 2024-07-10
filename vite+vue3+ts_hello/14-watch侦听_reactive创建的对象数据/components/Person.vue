<template>
    <div class="person">
        <h2>情况三：监视【reactive】创建的【对象类型】的数据</h2>
        <h3>姓名：{{ person.name }}  年龄：{{ person.age }}</h3>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人的信息</button>
    </div>
</template>

<script lang="ts" setup>
   import { reactive, watch } from 'vue'
   let person = reactive({
    name: '张三',
    age: 18
   })
   function changeName() {
    person.name += '#'
   }
   function changeAge() {
    person.age += 1
   }
   function changePerson() {
    Object.assign(person, {name: '李四', age: 98})
   }
   /**
    * 监视方法：
    * 第一个参数：监视的数据，直接写变量名，不需要变量名.value。
    *           注意：监视源（监视的数据），必须只能是：它可以是一个 ref (包括计算属性)、一个响应式对象（reactive）、一个 getter 函数、或多个数据源组成的数组
    * 第二个参数：监视结果的回调，有新旧两个参数。
    *           监视回调中的新旧两个参数其实就是一个值？？？ 这种说法是错误的。
    *           1、如果监视的数据是由【ref】创建的【基本类型】的数据，那么新旧值是不一样的，如果开启立即监视，新值（newValue）是初始化时的值，旧值（oldValue）是undefined，后续新旧值也是不一样的。
    *           2、如果监视的数据是由【ref】创建的【对象类型】的数据，那么
    *             (1)如果只是改变对象内的某个属性的值的时候，初次监听（即开启立即监听时），新值（newValue）是ref创建对象的初始值，旧值（oldValue）是undefined，新旧值是不一样的，
    *                这之后某个属性的值再发生改变，新旧值依然是初次监听到的值，因为监听的是对象的地址值，对象的地址值未发生改变，所以监听到person未发生改变，所以新旧值还是和初次监听的值一样，且回调函数不再执行。
    *             (2)如果改变的是整个对象的值（即地址指向发生了改变），那么初次改变时新值和旧值是不一样的，因为指向不同的地址值。再次改变时新旧值一样，因为新值和旧值指向同一个对象地址值，所以一样，
    *                且每次更改整个对象时，回调函数都会执行一次，因为更改整个对象，即对象的地址值发生了改变，监听到对象改变了，所以回调函数会执行。
    *           3、如果监视的数据是由【reactive】创建的【对象类型】的数据，那么
    *             (1)如果只是改变对象内的某个属性的值的时候，初次监听（即开启立即监听时），新值（newValue）是reactive创建对象的初始值，旧值（oldValue）是undefined，新旧值是不一样的。
    *                这之后某个属性的值再发生改变，新旧值一样，且是属性改后的最新值，且属性值改变一次，回调函数就执行一次（即回调函数就捕获一次），因为reactive创建的监视源是默认开启深度监视的（隐式深层监听），
    *                所以属性值改变时，回调函数也会执行，这一点和ref创建的对象数据的监视有所不同。
    *             (2)如果改变的是整个对象的值，初次监听（即开启立即监听时），新值（newValue）是reactive创建对象的初始值，旧值（oldValue）是undefined，新旧值是不一样的。
    *                改变后再次监听新旧值是一样的，指向同一个对象（因为reactive创建的对象数据改变整个对象时，只能通过Object.assign浅拷贝改变，所以改变后还是指向同一个对象的地址值），
    *                所以改变后新旧值一样，且再次点击更改整个对象值时回调函数不再执行，因为监听到对象的地址值未发生改变，所以不执行。
    * 第三个参数：配置项（包含是否开启深度（deep）监视，是否开启立即（immediate）监视等等）。
    *           1、如果监视的数据是由【reactive】创建的对象，那么是自动开启深度监视的，即便在配置项中将deep设置为false也是无效的，监听的时候还是深度监视。
    * 返回值stopWatch：停止监视函数。注意：一般情况下都是使用同步创建的监听器，同步创建的监听器会自动绑定在当前组件上，组件卸载时监听器会自动关闭停止。但也有特殊情况（如异步监听器），异步创建的
    *               监听器不会自动绑定在当前组件上，因此组件卸载时也不会自动关闭停止，所以需要必须手动关闭，防止内存泄露（慎用）。
    */
   const stopWatch = watch(person, (newValue, oldValue) => {
    console.log('@@person 改变了，', newValue, oldValue)
    if (newValue.age >= 30) {
        console.log('@@stopWatch:',stopWatch) //stopWatch是一个函数
        stopWatch()
    }
   }, {deep: false, immediate: true})
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