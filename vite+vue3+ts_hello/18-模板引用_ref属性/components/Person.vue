<template>
    <div class="person">
       <!-- id作为唯一标识 -->
       <!-- <h3 id="title">子组件title，id唯一标识</h3> -->
       <!-- html标签上使用ref -->
       <h3 ref="title">子组件【html标签】，【ref】引用</h3> 
       <!-- <h3 ref="title">子组件的【ref】标签tag</h3> -->
       <button @click="getChildComponentDom">测试获取子组件的html标签dom</button>
    </div>
</template>

<script lang="ts" setup>
/**
 * 子组件如果使用<script setup>,则默认子组件是私有的，被保护的，父组件（其他组件）无法访问的，要想被访问，需在子组件中使用宏函数【defineExpose】将要访问的数据暴露出去。
 */
// SPA，当子组件的id和父组件的id一样的时候，只能获取到父组件。 所以id不能作为vue或react项目中dom的唯一标识。
//    console.log('@@获取id为title的dom:', document.getElementById('title')) //打印结果是：<h3 id="title">父组件title，id作为唯一标识</h3>

// 使用ref作为dom的唯一标识，ref是局部的，子组件和父组件可以使用相同名字的ref引用。如果同一个组件中不小心写了两个或多个一样的ref标识，那么只有最后一个起作用，即获取到的dom元素只能是最后一个。
import { ref } from 'vue'
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
let title = ref()
function getChildComponentDom() {
    console.log('@@获取子组件title的dom：', title.value) //打印结果是：<h3 data-v-4cadc14e="">子组件title，【ref】作为唯一标识</h3>，其中data-v-4cadc14e=""是样式加了scoped的原因。
}

//子组件数据
let a = ref(3)
let b = ref('zi')
let c = ref(true)
console.log('@@a,b,c：', a.value, b.value, c.value)
//使用defineExpose将数据a和b暴露出去，像 defineExpose 这样的编译器宏不需要导入
defineExpose({ a, b})

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