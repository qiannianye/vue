<template>
    <div class="father">
        【适用于父传子，子传父。】
        <h4>我是父组件</h4>
        <h5>父的车：{{ car }}</h5>
        <h6 v-if="toy">子给的玩具：{{ toy }}</h6>
        <Child :car="car" :sendToy="getToy" />
    </div>
</template>

<script lang='ts' setup name="Props">
    import { ref } from 'vue'
    import Child from './Child.vue';

    let car = ref('奔驰')
    let toy = ref('')

    function getToy(value: string) {
        console.log('@@getToy：', value)
        toy.value = value
    }

    // 总结：通过props传值是组件通信中使用频率最高的一种方式，适用于父传子，子传父。父<->子。
    // 1、若父传子：属性值（props）是非函数。
    // 2、若子传父：属性值（props）是函数，父先绑定一个子组件定义的属性方法，再在子组件中触发该方法。
</script>

<style scoped>

</style>