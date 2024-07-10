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

//vue2和vue3

//vue3: CompositionsAPI, 组合式的API，数据方法集中在setup中，统一，便于维护和管理，提高开发效率。
//vue2的写法，OptionsAPI，配置项的API，数据分散在data、methods、computed等方法里，不易维护和修改。
export default {
    name: 'Person', //暴露的组件名字
    data() {
        return {
            name: '张三',
            age: 19,
            tel: '13178908907'
        }
    },
    methods: {
        //改名字
        changeName() {
            this.name = '李四'
        },

        //改年龄
        changeAge() {
            this.age = this.age + 1
        },

        //展示电话alert
        showTel() {
            alert(this.tel)
        }

    }
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