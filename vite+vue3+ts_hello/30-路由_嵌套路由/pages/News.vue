<template>
    <div>我是news</div>
    <ul>
        <li v-for="n in newsList" :key="n.id">
            <!-- 注意这里to的值要写完整的路径“/news/detail”，不能只写一个“/detail”，写‘/detail’路由规则就会被认为是跳转到‘/detail‘，而不是’/news/detail‘。 -->
            <RouterLink to="/news/detail">{{ n.title }}</RouterLink>
        </li>
    </ul>
    <div class="news-content">
        <RouterView></RouterView>
    </div>
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
    ul {
        float: left;
    }

    li {
        text-align: left;
        margin-top: 10px;
    }

    .news-content {
        float: left;
        margin-left: 60px;
        text-align: left;
    }
</style>