<template>
    <h1>Person组件</h1>
    <h3>求和为：{{ sum }}</h3>
    <button @click="add">点我+1</button>
</template>

<script lang="ts" setup>
    import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
    let sum = ref(0)
    function add() {
        sum.value += 1
    }

    //1、与vue2不同，vue3没有创建前（beforeCreate）和创建完毕（created）钩子，setup函数做了vue2这两个函数做的事情，且setup有语法糖。
    //2、vue3的生命周期函数以on开头，且要做的事情都写在回调函数中。
    //3、vue3的生命周期函数是开发者自己调用的，但里面的回调函数是vue调用的。
    //挂载前
    onBeforeMount(() => {
        console.log('@@vue3 挂载前')
        debugger
    }) 
    //挂载完毕
    onMounted(() => {
        console.log('@@vue3 挂载完毕')
    })
    //更新前
    onBeforeUpdate(() => {
        console.log('@@vue3 更新前')
    })
    //更新完毕
    onUpdated(() => {
        console.log('@@vue3 更新完毕')
    })
    //卸载前
    onBeforeUnmount(() => {
        console.log('@@vue3 卸载前')
    })
    //卸载完毕
    onUnmounted(() => {
        console.log('@@vue3 卸载完毕')
    })
</script>

<style scoped>
    /* scoped: 局部样式标记，代表style里的样式只在本文件内生效，与其他文件里的同名样式互不干扰。 */
    .person {
        background-color: skyblue;
        border: 1px solid blueviolet;
        margin: 20px;
        padding: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>