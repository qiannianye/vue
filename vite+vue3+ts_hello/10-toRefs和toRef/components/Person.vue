<template>
    <div class="person">
        <h1>我是person组件</h1>
        <h3>姓名：{{people.name}} 姓名2:{{ name }} 姓名3:{{ mingzi }}</h3>
        <h3>年龄：{{people.age}} 年龄2:{{ age }} 年龄3:{{ nianling }}</h3>
        <button @click="changeName">点我改名字</button>
        <button @click="changeAge">点我改年龄</button>
        <button @click="showTel">点我展示电话</button>
    </div>
</template>

<script lang="ts" setup>
    //引入toRefs
    import { reactive, ref, toRefs, toRef } from 'vue'
    const people = reactive({name: 'zhangsan-1', age:18, tel: '12345678901'}) //创建对象
    
    //下面这种写法不对，直接解构赋值ref包裹的变量，报错飘红
    // let { name, age, tel } = people

    //下面这种写法，直接解构赋值reactive包裹的变量，不报错不飘红，页面上数据也能正常使用，但是解构出来的值不再是响应式的，当其值更新后页面不会更改。
    // let {name, age, tel} = people

    //下面这种写法，使用toRefs解构ref包裹的变量，飘红报错
    // let {name, age, tel} = toRefs(people)

    //下面这种写法，使用toRefs包裹后解构赋值，解构出来的变量也变成了ref包裹的类型，即RefImpl的对象实例,使用的时候要用.value。
    let {name, age, tel} = toRefs(people) //解构一组（多个）
    let mingzi = toRef(people, 'name') //解构一个
    let nianling = toRef(people, 'age')

    //总结：toRefs()、toRef()，只能用于reactive包裹的变量，本质是将reactive创建的对象的属性变成ref创建的对象，即RefImpl实例对象。ref包裹的变量本身就是一个RefImpl对象，所以不需要使用toRefs或者toRef。
    //toRefs(): 解构一组（多个）属性。
    //toRef(): 解构一个属性。

    //修改名字
    function changeName() {
        //普通解构
        // name = 'lisi-2'
        // console.log('@@name被更改了', name)

        //使用toRefs()解构
        name.value = 'lisi=2' //解构的name更改了，mingzi变量也会跟着更改，因为他们是指向同一个对象
    }

    //修改年龄
    function changeAge() {
        //普通解构
        // age += 1
        // console.log('@@age被更改了', age)

        //使用toRefs()解构
        age.value += 1 //解构的age更改了，nianling变量也会跟着更改，因为他们是指向同一个对象
    }

    //展示电话
    function showTel() {
        // alert(people.value.tel)
        alert(people.tel)
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