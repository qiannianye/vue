<template>
    <div class="item">
        <!-- 作用域插槽：数据都在子组件中获取和维护，但是具体怎么展示是父组件决定的！
        作用域插槽就是在插槽上传值（可以理解为props），然后使用插槽的地方可以收到传来的值，从而根据值来展示。
        UI组件库用到插槽很多，比如弹窗、对话框、table表格等 -->

        <!-- 具名 作用域 插槽占位，并通过props传值 -->
        <slot name="s1" title="游戏列表"></slot>
        <!-- 默认 作用域 插槽占位，并通过props传值 -->
        <slot :games="games" title="游戏列表"></slot>
        <!-- 条件渲染的插槽 -->
        <div v-if="$slots.s2" class="s2">
            <slot name="s2" :imgUrl="imgUrl" />
        </div>
    </div>
</template>

<script lang='ts' setup>
    import { reactive, ref } from 'vue';

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
    .item {
        background: lightpink;
        border-radius: 10px;
        width: 115px;
        height: 200px;
    }

    /* h4 {
        text-align: center;
        background: yellow;
    } */
</style>