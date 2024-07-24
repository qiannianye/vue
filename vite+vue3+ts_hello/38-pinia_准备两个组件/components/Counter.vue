<template>
    <div class="counter">
        <h3>求和结果为：{{sum}}</h3>
        <!-- 这里注意：select标签选择后的值是字符串，不是number。所以直接number+字符串并不会计算成number，而是字符串拼接。 -->
        <!-- 解决方案1，在option标签上绑定number,写法如下 -->
        <!-- <select v-model="optionValue">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>
        </select> -->
        <!-- 解决方案2，在select标签绑定数据的时候指定类型，.number是尽可能将所接收的option数据转成number，但也有转不成功的，如‘嘿嘿1’，写法如下: -->
        <select v-model.number="optionValue">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <!-- 下面这个option数据，以字符串开头，转不成number -->
            <option>嘿嘿1</option>
            <!-- 下面这个option数据，以数字开头，可以转成number -->
            <option>1嘿嘿</option>
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