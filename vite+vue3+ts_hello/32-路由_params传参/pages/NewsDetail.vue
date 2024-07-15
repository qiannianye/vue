<template>
    <!-- <h5>新闻id：{{ route.params.id }}</h5>
    <h5>新闻标题：{{ route.params.title }}</h5>
    <h5>新闻内容：{{ route.params.content }}</h5> -->

    <h5>新闻id：{{ params.id }}</h5>
    <h5>新闻标题：{{ params.title }}</h5>
    <h5>新闻内容：{{ params.content }}</h5>
</template>

<script lang='ts' setup>
    import { toRefs } from 'vue'
    import { useRoute } from 'vue-router'
    const route = useRoute()
    console.log('@@route：', route)
    // 将params参数解构，解构一个响应式数据的时候，解构出来的值会失去响应式，若想不失去响应式，需使用toRef或者toRefs包裹。
    // const { params } = route // 这里的query是失去响应式的，所以解构出来只有第一次生效，后面URL里的值虽然变化了，但页面上不会变化。

    // 保留响应式的解构
    const { params } = toRefs(route)
</script>

<style scoped>

</style>