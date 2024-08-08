<template>
    <div class="father">
        <h4>react中的ref：{{ obj.b }}</h4>
        <h4>react中的ref：{{ obj.b + 1 }}</h4>
    </div>
</template>

<script lang='ts' setup>
    import { reactive, ref } from 'vue';

    // 响应式数据是对象，对象属性中是ref，会自动解包
    let obj = reactive({
        a: 1,
        b: ref(2)
    })
    console.log('@@b:', obj.b)

    // 响应式数据是数组：数组中是ref，不会自动解包。
    // 当 ref 作为响应式数组或原生集合类型 (如 Map) 中的元素被访问时，它不会被解包
    let obj_2 = reactive([ref(0), ref(1)])
    console.log('@@obj_2:', obj_2[0].value) //要想得到值，需要.value

    // 如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref
    let count = ref(99)
    let obj_3 = reactive({
        count
    })
    console.log('@@obj_3.count：', obj_3.count)
    let count_2 = ref(1000000)
    // obj_3.count = count_2.value
    // 下面这句代码是错误的，不能将number赋值给ref<number>类型
    // obj_3.count = count_2
    console.log('@@obj_3.count!!!!!!：',obj_3.count)
    console.log('@@count!!!!!!：',count.value)
    
</script>

<style scoped>
    
</style>