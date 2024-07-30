<template>
    <div class="counter">
        <!-- 使用store里的sum数据：counterStore.sum -->
        <h3>求和结果为：{{ sum }}，放大10倍后的和为：{{ bigSum }}</h3>
        <h4>学校的名字为：{{ schoolName }}，坐落于{{ address }}。 大写后的学校名字是: {{ upperSchool }}</h4>
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

    // 使用storeToRefs，getters里的属性值可以直接通过解构赋值取出来，并在模板中使用。
    const { sum, schoolName, address, bigSum, upperSchool } = storeToRefs(counterStore)
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