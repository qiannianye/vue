<template>
    <div class="counter">
        <!-- 使用store里的sum数据：counterStore.sum， pinia和vue3搭配，数据用的时候会自动提示，不容易出错 -->
        <h3>求和结果为counterStore.sum：{{ counterStore.sum }}</h3>
        <!-- 使用store里的sum数据：counterStore.$state.sum -->
        <h3>求和结果为counterStore.$state.sum：{{ counterStore.$state.sum }}</h3>
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
        // 注意：counterStore里的sum是一个refimpl的响应式对象，但是使用时不需要.value，直接使用counterStore.sum，因为vue已经做好了处理。
        // 使用store里的数据，下面两种方式都可以
        // counterStore.sum += optionValue.value
        counterStore.$state.sum += optionValue.value
    }
    function desc() { 
        // 使用store里的数据，下面两种方式都可以
        // counterStore.sum -= optionValue.value
        counterStore.$state.sum -= optionValue.value
    }

    // 举例reactive包裹的ref对象，使用时不用.value,因为vue已经自动解析.value了。
    const obj = reactive({
        a: 1,
        b: 3,
        c: ref(6)
    })
    // 注意打印c的时候，是obj.c，而不是obj.c.value，obj.c.value得到的是undefined。
    console.log('@@obj的各项：', obj.a, obj.b, obj.c) // 打印结果：1，3，6

    // 下面x是自己定义的ref，没有被reactive对象包裹，则取值时需要自己.value
    const x = ref(8)
    console.log('@@x:', x.value)

    // 总结：没有被reactive包裹的ref，使用时需要.value，被reactive包裹的ref，使用时不需要.value。

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