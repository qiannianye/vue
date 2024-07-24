<template>
    <div class="counter">
        <h3>求和结果为：{{sum}}</h3>
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
    import { ref } from 'vue'
    let sum = ref(0)
    let optionValue = ref(1)

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