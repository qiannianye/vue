<template>
    <div class="talk">
        <button @click="getTalk">点击获取一条土味情话</button>
        <ul>
            <!-- 循环的时候一定不要忘记 :key -->
            <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script lang='ts' setup>
    import { reactive } from 'vue'
    import axios from 'axios'
    import { nanoid } from 'nanoid'

    import { useTalkStore } from '@/store/talk'
    const talkStore = useTalkStore()

    async function getTalk() {
        try {
            // 多层解构赋值+重命名
            const { data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            // 利用返回的数据构建对象并插入数组
            // 使用nanoid/uuid随机字符串库，生成随机唯一字符串作为id
            // 安装：npm i nanoid  或者 npm i uuid
            talkStore.talkList.unshift({id: nanoid(), title})
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