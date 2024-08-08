<template>
    <div class="item">
       <h4>{{title}}</h4> 
       <!-- 使用默认插槽占位，默认插槽也是有名字的，默认插槽的名字是default -->
       <slot></slot>
       <!-- 使用具名插槽占位 -->
       <slot name="s1"></slot>
       <slot name="s2"></slot>
       <slot name="s3"></slot>
    </div>
</template>

<script lang='ts' setup name="Category">
    defineProps(['title'])
</script>

<style scoped>
    .item {
        background: lightpink;
        border-radius: 10px;
        width: 115px;
        height: 200px;
    }

    h4 {
        text-align: center;
        background: yellow;
    }
</style>