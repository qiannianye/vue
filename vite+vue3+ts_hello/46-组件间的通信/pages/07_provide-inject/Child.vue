<template>
    <div class="child">
        <h4>我是子组件</h4>
        <GrandChild/>
    </div>
</template>

<script lang='ts' setup>
    import GrandChild from './GrandChild.vue';
</script>

<style scoped>

</style>