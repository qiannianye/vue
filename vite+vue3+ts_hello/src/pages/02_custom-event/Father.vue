<template>
    <div class="father">
        【自定义事件传值，多用于子传父】
        <h4>我是父组件</h4>
        <!-- 当test调用的时候什么参数都不传的时候，直接可以接收到事件参数 -->
        <!-- <button @click="test">点击</button> -->
        <!-- 当test调用的时候，传了参数，且没有事件占位，事件会被搞丢 -->
        <!-- <button @click="test(3,4,5)">点击</button> -->

        <!-- 当test调用的时候，传递参数，并且不把事件event搞丢，就要使用$event占位 -->
        <!-- <button @click="test(3,4,5,$event)">点击</button> -->
        <h5 v-if="toy">子给的玩具：{{ toy }}</h5>
        <Child @send-toy="saveToy" /> 
    </div>
</template>

<script lang='ts' setup name="CustomEvent">
    import Child from './Child.vue';
    import { ref } from 'vue'

    let toy = ref('')

    // test在调用的时候，不传参数，可以直接接收到event事件实力对象参数。
    /* // 测试$event是什么？？？
    function test(a: Event) {
        console.log('@@test被点击了：', a) // 打印结果：a是一个PointerEvent事件对象。
        // 所以，每个触发事件的html标签，其实都会绑定一个XXXEvent事件对象。
    } */

   /*  // test在调用的地方，传了参数，且没有给事件占位，则事件对象实例会被搞丢。
    // 事件会不会在所有参数的后面或者前面？？？ 答案：否定的！事件是undefined.
    function test(a: number, b: number, c: number, d) {
        console.log('@@test传参数，没event占位：', a, b, c, d) // 打印结果： 3 4 5 undefined
    } */

   /*  // test在调用的地方传递参数，并且使用$event占位，参数里才能接收到event事件对象
    function test(a: number, b:number, c: number, d: Event) {
        console.log('@@test传递参数，有event占位：', a, b, c, d) // 打印结果：3 4 5 PointerEvent
    } */

    // 保存子给的玩具, 自定义事件的回调也可以接收到event事件实例对象，前提是在调用的地方使用$event占位，跟系统事件一样。
    function saveToy(value: string, event: Event) {
        console.log('@@保存子给的玩具：', value, event)
        toy.value = value
    }

</script>

<style scoped>

</style>