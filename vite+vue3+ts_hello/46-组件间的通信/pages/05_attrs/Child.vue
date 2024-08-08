<template>
    <div class="child">
        <h4>我是儿子组件</h4>
        <!-- 这里注意一个点：要传一组数据的时候使用v-bind -->
        <GrandChild v-bind="$attrs"/>
    </div>
</template>

<script lang='ts' setup>
    import GrandChild from './GrandChild.vue';
    // 当父组件通过props传值的时候，
    // 1、如果子组件通过defineProps接收了，那么父传来的数据都会放在props里。
    // 2、如果子组件没有通过defineProps接收，那么父传来的数据都会放在attrs里。
    // 所以当子组件不需要用到父组件的数据的时候，子组件的子组件，也就是孙组件需要用到父组件的数据的时候，可以不必接收，并通过$attrs直接传递给孙组件。

    // 接收父组件传过来的props
    // defineProps(['car', 'house'])
</script>

<style scoped>

</style>