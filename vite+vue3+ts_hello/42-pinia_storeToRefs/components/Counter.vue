<template>
    <div class="counter">
        <!-- 使用store里的sum数据：counterStore.sum -->
        <h3>求和结果为：{{ sum }}</h3>
        <h4>学校的名字为：{{ schoolName }}，坐落于{{ address }}</h4>
        <select v-model.number="optionValue">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <button @click="add">加</button>
        <button @click="desc">减</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref, reactive, toRefs } from 'vue'
    import { useCounterStore } from '@/store/counter';
    import { storeToRefs } from 'pinia';
    
    let optionValue = ref(1)
    // 取出store里的数据，counterStore是一个响应式对象，即reactive创建的对象。
    const counterStore = useCounterStore(); 
    console.log('@@counterStore:', counterStore)

    // 使用counterStore里的数据的时候，每次都counterStore.xxx，很麻烦臃肿，
    // 所以想要取出里面的数据再使用，那么就要用到toRefs包裹，否则会失去响应式。
    // 但是toRefs会把counterStore里的所有数据都转成refImpl对象，不管用没用到的，也不管是方法还是单纯的数据，都会被包装成RefImpl对象，不好。
    // 所以pinia里的storeToRefs就方便多了，只会将用到的数据转成RefImpl对象。

    // 使用toRefs，不友好。
    // const { sum, schoolName, address } = toRefs(counterStore)
    // console.log('@@使用toRefs解构赋值：', toRefs(counterStore))

    // 使用storeToRefs
    const { sum, schoolName, address } = storeToRefs(counterStore)
    console.log('@@使用storeToRefs解构赋值：', storeToRefs(counterStore))


    function add() {
        sum.value += optionValue.value
    }
    function desc() { 
        sum.value -= optionValue.value
    }
</script>

<style scoped>
    .counter {
        background: lightskyblue;
        border-radius: 4px;
        padding: 20px;
        margin-top: 10px;
    }
    select {
        display: block;
    }
    select, button {
        margin-top: 10px;
    }
    button {
        margin-right: 10px;
    }
</style>