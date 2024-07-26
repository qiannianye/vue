<template>
    <div class="counter">
        <!-- 使用store里的sum数据：counterStore.sum -->
        <h3>求和结果为：{{ counterStore.sum }}</h3>
        <h4>学校的名字为：{{ counterStore.schoolName }}，坐落于{{ counterStore.address }}</h4>
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
    
    let optionValue = ref(1)
    // 取出store里的数据，counterStore是一个响应式对象，即reactive创建的对象。
    const counterStore = useCounterStore(); 
    console.log('@@counterStore:', counterStore)

    function add() {
        // 第一种修改方式：拿到数据直接修改
        // counterStore.sum += optionValue.value
        // counterStore.schoolName = '@8909'
        // counterStore.address = '9999999'

        // 第二种修改方式：多个数据同时有修改的时候，使用$patch，这样只会有一次修改痕迹，如果采用第一种方式，会有多个修改痕迹。
        // counterStore.$patch({
        //     schoolName: '@9089',
        //     address: '9999999',
        //     sum: counterStore.sum + optionValue.value
        // })

        // 第三种修改方式：使用store里的action修改，一般逻辑比较复杂、复用的时候用action方式修改
        counterStore.increment(optionValue.value)
    }
    function desc() { 
        // 使用store里的数据，下面两种方式都可以
        // counterStore.sum -= optionValue.value
        counterStore.$state.sum -= optionValue.value
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