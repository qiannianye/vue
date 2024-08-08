<template>
    <div class="father">
        【适用于父组件和其后代（包含儿子组件，但父子间通信一般用props）组件之间的通信。】
        <h4>我是父组件</h4>
        <h5>父的钱：{{ money }}万。 父的车：{{ car.brand }}， 价值：{{ car.price }}万</h5>
        <Child/>
    </div>
</template>

<script lang='ts' setup name="ProvideFather">
    import { provide, reactive, ref } from 'vue';
    import Child from './Child.vue';

    let money = ref(200)
    let car = reactive({
        brand: '奔驰',
        price: 100
    })

    // 向后代提供数据
    // 注意：provide函数有两个参数，第一个参数是向后代提供的数据的名字，第二个是数据的值，但这里一定要注意，值不要.value，否则会失去响应式。
    // 下面这句代码是个坑，第二个参数.value使数据失去了响应式，不要这样写，要避坑。
    // provide('qian', money.value)
    // 正确的写法, 第二个参数可以是对象，传多个数据。
    provide('moneyContext', {money, updateMoney})
    provide('che', car)

    // 更新钱的方法
    function updateMoney(value: number) {
        money.value -= value
    }
</script>

<style scoped>

</style>