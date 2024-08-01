<template>
    <div class="father">
        <h4>我是父组件</h4>
        <div class="content">
            <!-- 注意：当在组件标签体内插入内容时，如果组件内部没有使用slot占位，那么组件标签体内插入的内容是不会展示在页面上的，
            因为vue不知道该往哪里插入这些内容，所以干脆就不管，如插入了，所以就不展示在页面上。 -->
            <Category title="游戏列表">
                <url>
                    <li v-for="g in games" :key="g.id"> {{ g.name }}</li>
                </url>
            </Category>
            <Category title="美食推荐">
                <img :src="imgUrl">
            </Category>
            <Category title="影视推荐">
                <video :src="movieUrl" controls></video>
            </Category>
        </div>
    </div>
</template>

<script lang='ts' setup name="SlotDefault">
    import { reactive, ref } from 'vue';
import Category from './Category.vue';

    let games = reactive([
        {id: '001', name: '斗罗大陆'},
        {id: '002', name: '王者荣耀'},
        {id: '003', name: '三国杀'},
        {id: '004', name: '吃鸡'},
    ])
    
    let imgUrl = ref('https://wx3.sinaimg.cn/mw690/8a9320f3ly1hrpi4vlzjgj23y8280x6s.jpg')
    let movieUrl = ref('https://f7.baidu.com/it/u=2910060508,1378038661&fm=222&app=106&f=JPEG?x-bce-process=image/quality,q_100/resize,m_fill,w_480,h_270/format,f_auto')

</script>

<style scoped>
    .content {
        display: flex;
        justify-content: space-evenly;
    }

    img {
        width: 100%;
    }
    video {
        width: 100%;
    }

</style>