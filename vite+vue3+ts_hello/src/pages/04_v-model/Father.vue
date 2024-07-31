<template>
    <div class="father">
        <h4>我是父组件</h4>
        <!-- 在html标签上使用v-model -->
        <!-- <input v-model="userName"> -->
        <!-- 下面这句代码是v-model的本质, 完整版v-bind绑定value，v-on绑定事件 -->
        <!-- <input v-bind:value="userName" v-on:input="inputName"> -->
        <!-- 下面这句代码也是v-model的本质，其实是v-bind和v-on的缩写 -->
        <!-- <input :value="userName" @input="inputName"> -->
        <!-- 下面这句代码等同于上面的两句，只是把函数体（处理数据绑定的）直接写在标签上，(<HTMLInputElement>$event.target)断言 -->
        <input :value="userName" @input="userName = (<HTMLInputElement>$event.target).value">
    
        <!-- 自定义组件 使用v-model 不改名字 -->
        <!-- <BetInput v-model="password" /> -->
        <!-- 下面这句代码是上面那句代码的本质，因为vue3底层绑定的值就叫modelValue，绑定的事件名就叫update:modelValue，所以这些是固定的。 -->
        <!-- <BetInput :modelValue="password" @update:modelValue="password = $event"/> -->
        <!-- 但是在使用v-model的时候可以改名字, 比如下面，意味着在子组件接收props的时候应该接收mingzi，声明事件时应该是update:mingzi  -->
        <!-- <BetInput v-model:mingzi="userName"/> -->
        <!-- 通过改名字，一个组件上可以写多个v-model -->
        <BetInput v-model:mingzi="userName" v-model:mima="password"/>
    </div>
</template>

<script lang='ts' setup name="VModel">
    import { ref } from 'vue'
    import BetInput from './BetInput.vue';

    let userName = ref('张三')
    let password = ref('123')

    // 注意点：关于$event，什么时候能写$event.target.value? 什么时候不能？
    // 主要是看$event是什么？
    // 1、$event是元素触发的事件，那就可以写$event.target，其中$event.target就是触发事件的元素。
    // 2、$event是方法回传的数据，就不能写$event.target。

    // 方法
    function inputName(event: any) {
        console.log('@@input name:',event, event.target)
        userName.value = event.target.value
    }

    function updatePassword(event: any) {
        password.value = event.target.value
    }
</script>

<style scoped>

</style>