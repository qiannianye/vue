<template>
    <div class="person">
        <h1>我是person组件</h1>
        姓：<input v-model="firstName"/><br/>
        名：<input v-model="lastName"/><br/>
        <!-- 简单展示 -->
        <!-- 姓名：{{ firstName }}{{ lastName }} -->
        <!-- 下面这种写法也能实现首字母大写的需求，但是vue官方不推荐，不建议模板里写复杂的代码。所以推荐使用计算属性来代替。 -->
        <!-- 姓名：{{ firstName.slice(0,1).toUpperCase() }}{{firstName.slice(1)}}-{{ lastName }} -->
        <!-- 使用计算属性 -->
        （计算属性）姓名： {{ fullName }} <br>
        <!-- 使用方法展示，每次模板有更新就会调用，不管计算所依赖的值是否发生改变，导致效率低，做了重复无用功。 -->
        （方法）姓名：{{ getMyName() }} <br>
        <button @click="changeFullName">点我修改fullName</button>
    </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue'   
    let firstName = ref('zhang')
    let lastName = ref('san')
    //需求：姓的首字母大写。=>实现1: 直接在模板template中操作fistName。 =>实现2（计算属性): 使用vue中的computed属性。 =>实现3(方法): 直接定义一个方法，在方法里处理。
    //计算属性写法1：下面这种写法fullName是只读的，不能修改。fullName是计算属性，且是ref。
    // let fullName = computed(() => {
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    // })

    //计算属性写法2：下面这种写法，fullName可读可写，fullName是计算属性，且是ref。
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
    function getMyName() {
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    }
    //计算属性有缓存，方法没有缓存。
    // 问：计算属性计算的函数体内的算法，同样放在一个函数里也可以实现，达到计算属性的效果，那么为什么要使用计算属性，而不直接使用一个方法呢？
    // 答：因为计算属性有缓存，计算属性就像一个快照一样，只是对依赖的值的一个计算，相当于一个副本，所以只有当计算所依赖的值改变的时候，计算属性（计算结果）
    // 才会跟着改变，如果计算所依赖的属性没有发生变化，那么就不再重新计算，而是直接取出上次计算的缓存的值，这样可以提高性能和效率。 而如果将这些计算放在一个
    // 方法里，模板里直接调用这个方法，那么模板有其他数据更新的时候，都会执行一遍该方法，即使计算所依赖的值没有变化，这样会导致效率低。因此更推荐使用计算属性而不是方法。

    // 另外，计算属性，在实际开发中应该被设计成只读的，因为它是依赖其他值计算出来的，所以要想改变计算属性的时候，应该改变它的计算依赖，而不是直接改它的值。
    // 计算属性也不适用于在它的getter或者setter方法中做一些副作用，比如异步请求等，应该在watch中去做。
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