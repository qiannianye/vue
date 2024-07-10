<template>
    <div class="person">
        <h1>我是person组件</h1>
        <h3>姓名：{{people.name}}</h3>
        <h3>年龄：{{people.age}}</h3>
        <button @click="changeName">点我改名字</button>
        <button @click="changeAge">点我改年龄</button>
        <button @click="showTel">点我展示电话</button>
        <hr/>
        <h3>一辆{{ car.brand }}， 价值{{ car.price }}万</h3>
        <button @click="changePrice">点我更改价格</button>
        <hr/>
        <h3>{{ car.brand }} - {{ car.price }}</h3>
        <button @click="changeCar">点我修改整个car，将其更换成一个新的一般对象</button>
        <hr/>
        <h3>{{ sum }}</h3>
        <button @click="add">点我求和加1</button>
    </div>
</template>

<script lang="ts" setup>
    //ref和reactive创建响应式数据
    //1、ref可以创建一般类型的响应式数据，也可以创建对象类型的响应式数据。 reactive只能创建对象类型的响应式数据。
    //2、ref创建对象类型的响应式数据时，底层使用的是reactive。
    //3、什么时候使用ref，什么时候使用reactive？
    //(1)一般类型：必须只能使用ref。
    //(2)对象类型：层次深的使用reactive，浅的使用ref。
    //4、使用reactive时要注意，当整体更改一般对象后，它会失去响应式，所以需要用Object.assign()来辅助。
    //5、使用ref时要注意，一定不要忘了.value。

    //引入
    import { reactive, ref } from 'vue'
    let sum = ref(0) //创建基本类型
    const people = ref({name: 'zhangsan-1', age:18, tel: '12345678901'}) //创建对象
    //reactive，修改整个car
    // var car = reactive({brand: '奔驰', price: 100})
    //换成ref，修改整个car
    var car = ref({brand: '奔驰', price: 100})

    //修改整个car
    function changeCar() {
        //这种写法car确实更改了，返回的也是Proxy(Object)对象，但car不是原来的car对象了，而是指向了一个新的对象，所以页面不会更新
        // car = reactive({brand:'宝马', price: 200})
        // console.log('@@car确实更改了，被赋值了一个新的对象:', car) //car确实更改了，打印是：Proxy(Object) {brand: '宝马', price: 200}，

        //这种写法，car对象确实更改了，但是却失去了响应式，reactive不起作用了，所以页面不会更新
        // car = {brand: '宝马', price: 200} //这个新的对象里的属性，只能是和原来car属性相同的属性，否则会报错飘红
        // console.log('@@car确实更改了，被赋值了一个新的对象:', car) //car 由Proxy(Object)变成了一般Object

        //下面这种写法，card被更改赋值新的对象后，还是响应式的，页面会更新
        // Object.assign(car, {brand: '宝马', price: 200, color: '红色'})
        // console.log('@@car确实更改了，被赋值了一个新的对象:', car) //car还是Proxy(Object)且可以增加原来没有的属性
        //Object.assign() :接收多个对象，第一参数是目标对象，后面的是要添加的对象，即将后面对象中的所有属性添加到第一个对象中，若第一个对象中有和后面对象重复的属性，则替换值，若没有则新增属性

        //以上就是使用reactive时要注意的点
        //=============================

        //换成ref更改整个car，就不会出现reactive的那种情况，因为ref只要value变了，页面就会响应式的跟着变
        car.value =  {brand: '宝马', price: 200}

        //下面这种写法报错，类型不匹配
        // car.value =  {brand: '宝马', price: 200, 'color': 100} //由于ts中定义即类型确定，所以car在初始化的时候类型就是{brand: '', price: 0},所以直接多加一个属性是类型不匹配，所以报错
    }

    //求和
    function add() {
        sum.value += 1

        //下面这种写法是错误的
        // sum = ref(10) //注意：一般类型的ref变量也不可以直接使用ref赋值修改
    }

    //修改名字
    function changeName() {
        people.value.name = 'lisi-2'
    }

    //修改年龄
    function changeAge() {
        people.value.age += 1
    }

    //修改宝马的价格
    function changePrice() {
        //reactive
        // car.price += 20

        //ref
        car.value.price += 20
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