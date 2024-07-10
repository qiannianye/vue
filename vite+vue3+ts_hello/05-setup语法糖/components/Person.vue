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

<!-- <script lang='ts'>
//可以定义组件的名字，若组件名字跟文件名字保持一致，可以不写这个
export default {
    name: 'Person123', //暴露的组件名字
}
</script> -->

<script lang="ts" setup name="Person456">
    //1、setup语法糖的script标签和暴露组件名字的script标签是不可以合并在一起的。若想合并可以使用script的name属性，但是需要配置vite-plugin-vue-setup-extend插件。
    //2、npm i vite-plugin-vue-setup-extend -D，安装开发依赖插件。并在vite.config.ts文件中引入调用。
    //setup语法糖 相当于setup() { return {}}
    let name = '张三-1'
    let age = 18
    let tel = '157890767567'
    

    //修改名字
    function changeName() {
        name = '李四-2'
        console.log('@@名字修改了！',name) //name确实修改了，但不是响应式的，所以页面上的名字并没有改变
    }

    //修改年龄
    function changeAge() {
        age = age + 1
        console.log('@@年龄修改了!', age) //age确实修改了，但不是响应式的，所以页面上的年龄并没有改变
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