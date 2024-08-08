<template>
    <div class="child">我是根节点1，嘿嘿～</div>
    <div class="child">我是根节点2，哈哈～</div>
    <div class="child">我是根节点3，呵呵～</div>

    <!-- 指定根节点绑定attribute，消除警告 -->
    <div class="child" v-bind="$attrs">我是根节点4，啦啦～</div>
</template>

<script lang='ts'>
    // 当子组件是多根节点组件的时候，如果不指定哪个根节点来绑定attribute，那么Vue会抛出警告，但是子组件的attrs还是有传递过来的值的。
    // 可以给多根节点的某个根几点指定绑定attribute，就会消除警告了。
    export default {
        setup(props, ctx) {
            console.log('多根节点未指定绑定attribute的节点的打印attrs：', ctx.attrs)
            return ctx.attrs
        },
    }    
</script>

<style scoped>

</style>