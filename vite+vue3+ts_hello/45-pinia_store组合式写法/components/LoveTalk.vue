<template>
    <div class="talk">
        <button @click="talkStore.getTalk">点击获取一条土味情话</button>
        <ul>
            <!-- 循环的时候一定不要忘记 :key -->
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script lang='ts' setup>
    import { useTalkStore } from '@/store/talk'
    import { storeToRefs } from 'pinia';

    const talkStore = useTalkStore()
    const { talkList } = storeToRefs(talkStore)

    // 订阅，每个store身上都有一个订阅的方法，当store发生变化后，会调用订阅方法中的回调。
    talkStore.$subscribe((mutation, state) => {
        console.log('@@订阅talkStore发生变化了')
        console.log('@@订阅mution:', mutation)
        console.log('@@订阅state:', state)

        // 将数据存储在缓存中，使数据不丢失。
        localStorage.setItem('talks', JSON.stringify(state.talkList))
    })

</script>

<style scoped>
    .talk {
        background: pink;
        border-radius: 4px;
        padding: 20px;
        margin-top: 10px;
    }
</style>