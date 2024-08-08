<template>
    <div class="grand-child">
        <h4>我是孙组件</h4>
        <!-- <h5>爷爷的钱：{{ money }}</h5> -->
        <h5>爷爷的钱：{{ money }}万。 爷爷的车：{{ car.brand }}， 价值：{{ car.price }}万</h5>
        <button @click="updateMoney(10)">花爷爷的钱</button>
    </div>
</template>

<script lang='ts' setup>
    import { inject } from 'vue';

    // const money = inject('qian')
    // console.log('@@money:', money) // 得到的money依然是响应式数据

    // 下面这句代码，如果只是接收了che这个数据，则模板里会报错:不知道car是什么类型的数据，不知道car里有brand和price属性，这是类型推断没有推断出来的问题。
    // 那么父组件在provide的时候传了正确的car，理论上应该推导出来car的类型，但是这里却推断失败了，如何解决？
    // inject函数有两个参数，第一个是接收的数据的名字，第二个是默认值，可以通过给定一个默认值，让其正确推断出类型。
    // const car = inject('che')

    // 带默认值的注入
    const {money, updateMoney} = inject('moneyContext', {money: '我是默认值', updateMoney: (a: number) => { }})
    const car = inject('che', {brand: 'unknown', price: 0})
</script>

<style scoped>
    .grand-child {
        background: rgb(223, 111, 245);
        border-radius: 10px;
        padding: 10px;
        color: white;
    }

    .grand-child h5 {
        color: white;
    }
</style>