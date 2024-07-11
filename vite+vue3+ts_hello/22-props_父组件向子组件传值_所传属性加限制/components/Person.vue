<template>
    <div class="person">
        <h1>Person组件：接收props</h1>
        <ul>
            <li v-for="p in list" :key="p.id"> {{ p.name }} - {{ p.age }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import type { PersonInter, PersonList, Persons } from '@/types'
    import { withDefaults } from 'vue'
    // 普通接收
    // defineProps(['list'])

    // 限定类型 + 必传
    // const props = defineProps<{list: PersonList}>()
    // console.log('@@props：', props)

    // 限定类型 + 非必传
    // defineProps<{list?: PersonList}>()

    // 限定类型 + 非必传 + 默认值（初始化）
    withDefaults(defineProps<{list?: PersonList}>(), {
        // list: [{id: '003', name: '雪碧可乐透心凉', age: 0}] //这里不可以直接写一个字面量赋值给list，会报错！！！必须写一个函数，返回值是想要初始化的值。
        list: () => [{id: '003', name: '雪碧可乐透心凉', age: 0}]
    })

</script>

<style scoped>
    /* scoped: 局部样式标记，代表style里的样式只在本文件内生效，与其他文件里的同名样式互不干扰。 */
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