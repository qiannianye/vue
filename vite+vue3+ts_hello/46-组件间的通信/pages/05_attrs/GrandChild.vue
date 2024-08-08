<template>
    <div class="grand-child">
        <h4>我是孙组件, 单根组件，attribute可以直接透传给组件的根节点</h4>
        <h5>孙的玩具：{{ toy }}</h5>
        <h6>爷爷的财产：房子-{{ house.name }}-{{ house.price }}w，车子-{{ house.car.name }}-{{ house.car.price }}w</h6>
        <button @click="sendToy(toy)">把玩具送给爷爷</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'

    let toy = ref('奥特曼')
    // 接收props
    defineProps(['house', 'sendToy'])
</script>

<style scoped>
    .grand-child {
        background: rgb(223, 111, 245);
        border-radius: 10px;
        padding: 10px;
    }
</style>