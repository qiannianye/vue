<template>
    <div>我是about</div>
</template>

<script lang='ts' setup name="About">
    import { onMounted, onUnmounted } from 'vue'

    onMounted(() => {
        console.log('@@About组件挂载了')
    })

    onUnmounted(() => {
        console.log('@@About组件卸载了')
    })
</script>

<style scoped>

</style>