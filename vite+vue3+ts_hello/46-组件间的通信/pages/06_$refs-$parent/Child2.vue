<template>
    <div class="child">
        <h4>我是子组件_2</h4>
        <h5>子组件2的玩具：{{ toy }}, {{ book }}本书</h5>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';

    let toy = ref('小汽车')
    let book = ref(8)

    // 向外部提供可访问的数据
    defineExpose({toy, book})
</script>

<style scoped>

</style>