<template>
    <div>
       <h4>{{title}}</h4> 
       <!-- 使用默认插槽占位 -->
       <slot></slot>
    </div>
</template>

<script lang='ts' setup>
    defineProps(['title'])
</script>

<style scoped>
    div {
        background: lightpink;
        border-radius: 10px;
        width: 120px;
        height: 200px;
    }

    h4 {
        text-align: center;
        background: yellow;
    }
</style>