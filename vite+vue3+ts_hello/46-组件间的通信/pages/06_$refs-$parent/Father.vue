<template>
    <div class="father">
        【适用于父子间的通信（批量多个子同时修改时），多用于父传子，也可子传父。】
        <h4>我是父组件</h4>
        <h5>父的房产套数：{{ house }}</h5>
        <button @click="changeC1Book">点我修改子组件1的书</button>
        <button @click="changeC2Toy">点我修改子组件2的玩具</button>
        <button @click="getAllChild($refs)">点我获取所有子组件实例对象并遍历修改子组件数据</button>
        <Child1 ref="c1"/>
        <Child2 ref="c2"/>
    </div>
</template>

<script lang='ts' setup name="RefsFather">
    import { ref } from 'vue'
    import Child1 from './Child1.vue';
    import Child2 from './Child2.vue';

    let house = ref(4)

    // 使用ref打标记，则需要定义, c1,c2是组件Child1和Child2的实例对象。但是vue是对数据保护的，要使用其里面的数据，需要defineExpose()
    let c1 = ref()
    let c2 = ref()
    console.log('@@c1：', c1) 
    // 拿到组件的实例对象，且实例对象已经放开了数据的访问权限，父组件可以直接修改子组件数据了
    function changeC1Book() {
        c1.value.book = 100
    }
    function changeC2Toy() {
        c2.value.toy = '霸王龙'
    }

    // 需求，若是父组件只有一两个子组件需要更新，那么可以用ref。如果有一堆子组件都需要修改，如何批量呢？就需要用到$refs。
    // 通过$refs获取所有的子组件
    function getAllChild(refs: {[key: string]: any}) {
        // 这里refs会报类型错误的提示，解决方案：
        // 1、refs: {[key: string]: any}
        // 2、refs: any
        // 有时候ts的类型提示很不友好，不得不用any，所以要灵活使用，不必纠结。
        console.log('@@获取所有子组件refs：', refs) // 注意：refs是一个reactive响应式对象

        // 拿到所有子组件后可以通过遍历去修改每个子组件
        for (const key in refs) {
            if (Object.prototype.hasOwnProperty.call(refs, key)) {
                // 由于refs是一个reactive响应式对象，所以它里面的属性直接使用，且被它包裹的ref对象，在修改值的时候也不用带.value。
                const element = refs[key];
                element.book += 10
            }
        }
    }

    // 向外部提供可访问的数据
    defineExpose({ house })

</script>

<style scoped>

</style>