<template>
    <div>我是home</div>
</template>

<script lang='ts' setup name="Home">
    import { onMounted, onUnmounted } from 'vue'

    onMounted(() => {
        console.log('@@Home组件挂载了')
    })

    onUnmounted(() => {
        console.log('@@Home组件卸载了')
    })
</script>

<style scoped>

</style>