<template>
    <div class="father">
        【适用于祖子间的通信，多用于祖传孙，孙也可传祖。但会打扰中间的儿子组件。】
        <h4>我是 祖 组件</h4>
        <h5>祖父的车：{{ car }}</h5>
        <h6 v-if="toy">孙子给的玩具：{{ toy }}</h6>
        <!-- 这里注意一个点：要传一组数据的时候使用v-bind -->
         <!-- :sendToy 实现的是孙传祖，其他数据实现的是祖传父。跟props传值一样的。分函数和非函数。 -->
        <Child :car="car" :house="house" v-bind="{x: 22, y: 99}" :sendToy="saveToy" />

        <!-- 多根节点的子组件,如何接收透传的attribute -->
        <MutipleRoot x="1" :car="car" class="test-class" v-bind="{a: 99, b: 100}"/> 
    </div>
</template>

<script lang='ts' setup name="AttrsFather">
    import { reactive, ref } from 'vue'
    import Child from './Child.vue';
    import MutipleRoot from './MutipleRoot.vue';

    let car = ref('奔驰')
    let house = reactive({
        name: '别墅',
        price: 1000,
        car: {
            name: '宝马',
            price: 100
        }
    })
    let toy = ref('')

    // 保存玩具
    function saveToy(value: string) {
        toy.value = value
    }

</script>

<style scoped>

</style>