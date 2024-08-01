<template>
    <div class="child">
        <h4>我是子组件_1</h4>
        <h5>子组件1的玩具：{{ toy }}, {{ book }}本书</h5>
        <button @click="minusHouse($parent)">点我分掉父组件的房产</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';

    let toy = ref('奥特曼')
    let book = ref(3)

    // 向外部提供可访问的数据
    defineExpose({toy, book})

    // 通过$parent，拿到父组件实例，并在父组件defineExpose数据后，修改数据。
    function minusHouse(parent: any) {
        // 这里parent也会有类型提示错误，跟$refs一样
        console.log('@@获取的父组件实例：', parent)

        // 注意：这里的parent是响应式reactive对象，所以它里面的数据直接使用，它里的ref对象修改数据的时候也是直接修改，不用.value。
        parent.house -= 1

        // 下面这句代码是错误的
        // parent.house.value -= 1
    }
</script>

<style scoped>

</style>