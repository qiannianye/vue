<template>
    <div>我是news</div>
    <ul>
        <li v-for="n in newsList" :key="n.id">
            <RouterLink 
                :to="{
                    name: 'xiang',
                    // query: {
                    //     id: n.id,
                    //     title: n.title,
                    //     content: n.content
                    // },
                    params: {
                        id: n.id,
                        title: n.title,
                        content: n.content
                    }
                }"
                replace
            >
            {{ n.title }}
            </RouterLink>
            <button @click="scanNews(n)">查看</button>
        </li>
    </ul>
    <div class="news-content">
        <RouterView></RouterView>
    </div>
</template>

<script lang='ts' setup name="News">

    import { useRouter, type LocationQueryRaw } from 'vue-router'
    import { reactive, onMounted, onUnmounted } from 'vue'

    const router = useRouter()
    
    // 数据
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

    // 限定参数类型
    interface NewsInter extends LocationQueryRaw {
        id: string,
        title: string,
        content: string
    }

    // 点击按钮 查看新闻
    function scanNews(currentNews: NewsInter) {
        // 编程式路由：调用router的push/replace方法做跳转，方法中的to参数和<RouterLink>标签中一样，字符串和对象写法，属性也一样。
        // 注意注意：编程式路由，也要在路由器中配置好路由路径，才能做跳转。
        
        // 使用query传参数
        // router.push({
        //     // name: 'xiang',
        //     path: '/news/detail',
        //     query: currentNews
        // })

        // 使用params传参数
        router.replace({
            // path: '/news/detail/:id/:title/:content',
            name: 'xiang',
            params: {
                id: currentNews.id,
                title: currentNews.title,
                content: currentNews.content
            }
        })
    }
</script>

<style scoped>
    ul {
        float: left;
    }

    li {
        text-align: left;
        margin-top: 10px;
        color: green !important;
    }

    .news-content {
        float: left;
        margin-left: 60px;
        text-align: left;
    }

    ul li::marker {
        color: green;
    }

    ul button {
        margin-left: 20px;
    }
</style>