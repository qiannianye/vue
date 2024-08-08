<template>
    <div class="father slot">
        <h4>我是父组件：【具名插槽】</h4>
        <div class="content">
            <!-- 注意：在使用具名插槽的时候，【v-slot:插槽名字】来标识使用的是哪个插槽，
            但是【v-slot:插槽名字】这个标识只能写在<template>标签上，所以标签体slot的内容需要使用<template>标签包裹下 -->
            <Category title="游戏列表">
                <template v-slot:s1>
                    <url>
                        <li v-for="g in games" :key="g.id"> {{ g.name }}</li>
                    </url>
                </template>
            </Category>
            <!-- 具名插槽的简写：#，语法糖 -->
            <Category title="美食推荐">
                <template #s2>
                    <img :src="imgUrl"/>
                </template>
            </Category>
            <Category title="影视推荐">
                <template v-slot:s3>
                    <video :src="movieUrl" controls></video>
                </template>
            </Category>
        </div>
    </div>
</template>

<script lang='ts' setup>
    import { reactive, ref } from 'vue'
    import Category from './Category.vue'

    let games = reactive([
        {id: '001', name: '斗罗大陆'},
        {id: '002', name: '王者荣耀'},
        {id: '003', name: '三国杀'},
        {id: '004', name: '吃鸡'},
    ])
    
    let imgUrl = ref('https://wx3.sinaimg.cn/mw690/8a9320f3ly1hrpi4vlzjgj23y8280x6s.jpg')
    let movieUrl = ref('https://media.w3.org/2010/05/sintel/trailer.mp4')

</script>

<style scoped>
   .slot {
        width: auto;
        background: cyan;    
        margin-top: 20px;
    }
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