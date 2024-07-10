<template>
    <div class="person">
        <h1>我是person组件</h1>
        <h3>姓名：{{name}}</h3>
        <h3>年龄：{{age}}</h3>
        <button @click="changeName">点我改名字</button>
        <button @click="changeAge">点我改年龄</button>
        <button @click="showTel">点我展示电话</button>
    </div>
</template>

<script lang='ts'>
//可以定义组件的名字，若组件名字跟文件名字保持一致，可以不写这个
export default {
    name: 'Person123', //暴露的组件名字
}
</script>

<script lang="ts" setup>
    //1、setup语法糖的script标签和暴露组件名字的script标签是不可以合并在一起的。若想合并可以使用script的name属性，但是需要配置vite-vue-setup-extend插件。
    //2、npm i vite-vue-setup-extend -D，安装开发依赖插件。并在vite.config.ts文件中引入调用。
    //setup语法糖 相当于setup() { return {}}

    //引入ref，创建基本类型（int、bool、double、string等）的响应式变量
    //注意：ref包裹的基本类型的变量，使用值时两种情况：script标签中使用是xxx.value，取值。模板template中使用是直接变量名，template会自动取变量的value值。
    import { ref } from 'vue'
    let name = ref('张三-1') //使用ref包裹后，是一个RefImpl对象实例
    let age = ref(18) //使用ref包裹后，是一个RefImpl对象实例
    let tel = '157890767567' //未使用ref包裹，只是一个普通的字符串
    
    

    //修改名字
    function changeName() {
        name.value = `李四-${age.value+1}`
        console.log('@@名字修改了！',name) 
    }

    //修改年龄
    function changeAge() {
        age.value = age.value + 1
        console.log('@@年龄修改了!', age) 
    }

    //弹窗电话
    function showTel() {
        alert(tel)
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