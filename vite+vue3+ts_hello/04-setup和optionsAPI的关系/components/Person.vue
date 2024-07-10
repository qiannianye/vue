<template>
    <div class="person">
        <h1>我是person组件</h1>
        <h3>姓名：{{name}}</h3>
        <h3>年龄：{{age}}</h3>
        <button @click="changeName">点我改名字</button>
        <button @click="changeAge">点我改年龄</button>
        <button @click="showTel">点我展示电话</button>
        <hr />
        <h3>data和setup共存：{{`我是data里的数据${a}`}}</h3>
        <h3>data读取setup中的数据name：{{c}}</h3>
        <button @click="b">methods和setup共存：我是methods里的点击事件b</button>
    </div>
</template>

<script lang='ts'>
export default {
    name: 'Person', //暴露的组件名字
    beforeCreate() {
        console.log('@@beforeCreate')
    },
    data () {
        return {
            a: 100,
            c: this.name //data可以读取setup中的数据，因为setup在data执行前就已经执行完了
        }
    },
    methods: {
        b() {
            console.log('@@测试methods和setup共存，我点击了')
        }
    },
    setup () {
        // console.log('@@setup读取data中的数据:', a) //setup无法读取data中的数据，直接undefined，加上this.a也是报错，不能读取undefined中的a变量

        //总结：setup和optionsAPI的关系
        //1、setup和optionsAPI（data、mehtods、computed等）可以共存，但一般不推荐这种做法。
        //2、setup无法读取data中的数据，但data可以读取setup中的数据。
        
        console.log('@@setup')
        console.log('@@this是什么？？？', this) //setup中没有维护this指针，this值是undefined, vue3已经慢慢开始弱化this了
        //注意：setup函数在所有的生命周期函数执行之前执行
        //vue3的写法：compositionsAPI, 组合式设计风格，集中统一管理数据和方法
        //注意：这里的属性name、age、tel原来是写在data里的，现在直接写在这里，就不是响应式的了
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

        //注意：setup要有返回值，是为了把数据、方法交出去，供模板使用
        //1、返回对象（常用）
        return {name,age,tel,changeName,changeAge,showTel}
        //setup的返回值也可以是一个渲染函数
        // return function() {
        //     return '哈哈'
        // }
        // return () => '哈哈'
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