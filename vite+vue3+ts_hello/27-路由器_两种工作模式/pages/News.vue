<template>
    <div>我是news</div>
    <li v-for="n in newsList" :key="n.id">
        {{ n.title }}
    </li>
</template>

<script lang='ts' setup name="News">

    import { reactive, onMounted, onUnmounted } from 'vue'

    const newsList = reactive([{
        id: '001',
        title: '新闻001',
        content: '好消息！好消息！要发工资了！'
    }, {
        id: '002',
        title: '新闻002',
        content: '大明星xxx要结婚了！'
    }, {
        id: '003',
        title: '新闻003',
        content: '今天又下暴雨了！'
    }, {
        id: '004',
        title: '新闻004',
        content: '若是月亮还没来，路灯也可照窗台'
    }])

    onMounted(() => {
        console.log('@@News组件挂载了')
    })

    onUnmounted(() => {
        console.log('@@News组件卸载了')
    })
</script>

<style scoped>
    li {
        text-align: left;
        margin-top: 10px;
    }
</style>