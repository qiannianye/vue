<template>
    <div class="person">
        <h1>我是person组件</h1>
        <h3>姓名：{{people.name}}</h3>
        <h3>年龄：{{people.age}}</h3>
        <button @click="changeName">点我改名字</button>
        <button @click="changeAge">点我改年龄</button>
        <button @click="showTel">点我展示电话</button>
        <hr/>
        <li v-for="c in cars" :key="c.id">
            {{ c.brand }}，价值{{ c.price }}万
        </li>
        <button @click="changeBaomaPrice">点我更改宝马的价格</button>
    </div>
</template>

<script lang='ts'>
//可以定义组件的名字，若组件名字跟文件名字保持一致，可以不写这个
export default {
    name: 'Person123', //暴露的组件名字
}
</script>

<script lang="ts" setup>
    //ref创建对象的响应式数据
    //引入vue中的ref函数
    import { reactive, ref } from 'vue'
    //使用ref函数包裹一般对象，使其成为响应式数据
    //ref创建的响应式数据，使用时一定要用.value
    //创建对象
    const people = ref({name: 'zhangsan-1', age:18, tel: '12345678901'})
    console.log('@@people:', people) //打印结果：RefImpl{...., _value: Proxy(Object) {name: 'zhangsan-1', age: 18, tel: '12345678901'}}
    //reactive创建的对象是js内部调用Proxy方法返回的对象，能够实现响应式

    //创建数组
    const cars = ref([{
        id: '1',
        brand: '奥迪',
        price: 100
    }, {
        id: '2',
        brand: '宝马',
        price: 200
    }, {
        id: '3',
        brand: '奔驰',
        price: 300
    }])

    //修改名字
    function changeName() {
        people.value.name = 'lisi-2'
    }

    //修改年龄
    function changeAge() {
        people.value.age += 1
    }

    //修改宝马的价格
    function changeBaomaPrice() {
        cars.value[1].price = 500
    }

    //展示电话
    function showTel() {
        alert(people.value.tel)
    }
       
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