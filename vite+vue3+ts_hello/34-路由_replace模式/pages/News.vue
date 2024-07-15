<template>
    <div>我是news</div>
    <ul>
        <li v-for="n in newsList" :key="n.id">
            <!-- 注意这里to的值要写完整的路径“/news/detail”，不能只写一个“/detail”，写‘/detail’路由规则就会被认为是跳转到‘/detail‘，而不是’/news/detail‘。 -->
            <!-- params传参数写法一：利用模板字符串，在配置路由的地方先占位，然后在传递的地方直接拼接参数的值 -->
            <!-- <RouterLink :to="`/news/detail/${n.id}/${n.title}/${n.content}`">{{ n.title }}</RouterLink> -->
            <!-- params传参数写法二：利用对象path或者name属性 -->
            <RouterLink 
                :to="{
                    // 注意：在使用params方式传参的时候，对象写法的时候不能使用path，会被忽略,切换不起作用，只能使用name。控制台警告如下:
                    // Path '/news/detail' was passed with params but they will be ignored. Use a named route alongside params instead. 
                    // path: '/news/detail',
                    name: 'xiang',
                    // params: {
                    //     id: n.id,
                    //     title: n.title,
                    //     // content: n.content,
                    //     content: n.content,
                    //     // a: [1,2,3,4], // params中不能传递数组类型的属性，否则报错
                    //     // a: a_obj //params中也不能传递对象类型的属性，否则报错
                    // }

                    query: {
                        id: n.id,
                        title: n.title,
                        content: n.content
                    }
                }"
                replace
            >
            {{ n.title }}
            </RouterLink>
        </li>
    </ul>
    <div class="news-content">
        <RouterView></RouterView>
    </div>
</template>

<script lang='ts' setup name="News">

    import type { title } from 'process';
import { reactive, onMounted, onUnmounted } from 'vue'
    const a_obj = reactive({
        b: '123'
    })

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
</style>