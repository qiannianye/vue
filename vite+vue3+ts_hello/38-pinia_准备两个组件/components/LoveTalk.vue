<template>
    <div class="talk">
        <button @click="getTalk">点击获取一条土味情话</button>
        <ul>
            <!-- 循环的时候一定不要忘记 :key -->
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script lang='ts' setup>
    import { reactive } from 'vue'
    import axios from 'axios'
    import { nanoid } from 'nanoid'

    let talkList = reactive([
        {id: '001', title: '你今天怪怪的，哪里怪？怪好看的！'},
        {id: '002', title: '草莓，蓝莓，蔓越莓，你想我了没？'},
        {id: '003', title: '给你留了一块地，什么地？我的死心塌地！'},
    ])

    async function getTalk() {
        try {
            // 多层解构赋值+重命名， 等同于res.data.content。
            const { data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            // 利用返回的数据构建对象并插入数组
            // 使用nanoid/uuid随机字符串库，生成随机唯一字符串作为id
            // 安装：npm i nanoid  或者 npm i uuid，如果npm安装比较慢或者不好使，可以使用yarn add nanoid 或者yarn add uuid
            talkList.unshift({id: nanoid(), title})
        } catch (error) {
            console.log('@@获取土味情话失败!', error)
        }
    }
</script>

<style scoped>
    .talk {
        background: pink;
        border-radius: 4px;
        padding: 20px;
        margin-top: 10px;
    }
</style>