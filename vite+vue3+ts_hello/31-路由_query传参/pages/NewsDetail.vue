<template>
    <!-- <h5>新闻id：{{route.query.id}}</h5>
    <h5>新闻标题：{{route.query.title}}</h5>
    <h5>新闻内容：{{route.query.content}}</h5> -->

    <h5>新闻id：{{query.id}}</h5>
    <h5>新闻标题：{{query.title}}</h5>
    <h5>新闻内容：{{query.content}}</h5>
</template>

<script lang='ts' setup>
    import { toRefs } from 'vue'
    import { useRoute } from 'vue-router'
    const route = useRoute()
    console.log('@@route：', route)
    // 将query参数解构，解构一个响应式数据的时候，解构出来的值会失去响应式，若想不失去响应式，需使用toRef或者toRefs包裹。
    // const { query } = route // 这里的query是失去响应式的，所以解构出来只有第一次生效，后面URL里的值虽然变化了，但页面上不会变化。

    // 保留响应式的解构
    const { query } = toRefs(route)
</script>

<style scoped>

</style>