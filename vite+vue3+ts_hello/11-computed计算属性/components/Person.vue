<template>
    <div class="person">
        <h1>我是person组件</h1>
        姓：<input v-model="firstName"/><br/>
        名：<input v-model="lastName"/><br/>
        <!-- 姓名：{{ firstName }}{{ lastName }} -->
        <!-- 下面这种写法也能实现首字母大写的需求，但是vue官方不推荐，不建议模板里写复杂的代码。所以推荐使用计算属性来代替。 -->
        <!-- 姓名：{{ firstName.slice(0,1).toUpperCase() }}{{firstName.slice(1)}}-{{ lastName }} -->
        姓名： {{ fullName }}
        <button @click="changeFullName">点我修改fullName</button>
    </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue'   
    let firstName = ref('zhang')
    let lastName = ref('san')
    //需求：姓的首字母大写
    //实现1: 直接在模板template中操作fistName.
    //实现2: 使用vue中的computed属性。（计算属性)
    //写法1：下面这种写法fullName是只读的，不能修改。fullName是计算属性，且是ref。
    // let fullName = computed(() => {
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    // })

    //写法2：下面这种写法，fullName可读可写，fullName是计算属性，且是ref。
    let fullName = computed({
        get() {
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
        },
        set(val) {
            console.log('@@val:',val) //打印出来是li-si
            const [str1, str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })
    //修改fullName
    function changeFullName() {
        // fullName.value = 'li-si' //写法1，这里直接修改飘红报错：因为fullName是只读（read-only），不可修改
        fullName.value = 'li-si' //写法2，这里正常，因为fullName可读可写
    }
    //计算属性有缓存，方法没有缓存。

</script>

<style>
    .person {
        background-color: skyblue;
        border: 1px solid blueviolet;
        margin: 20px;
        padding: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>