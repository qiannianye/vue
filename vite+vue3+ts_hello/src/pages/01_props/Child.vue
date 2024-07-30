<template>
    <div class="child">
        <h4>我是子组件</h4>
        <h5>子的玩具：{{ toy }}</h5>
        <h6 v-if="car">父 给的车：{{ car }}</h6>
        <!-- 直接在模板中调用属性方法。 -->
        <!-- <button @click="sendToy(toy)">把玩具给父</button> -->
         <!-- 直接写方法，并在方法中调用属性方法 -->
         <button @click="fasongToy">把玩具给父</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'

    let toy = ref('奥特曼')

    // 总结：子组件触发属性方法有两种写法：

    // 1、接收属性值但不保存，直接在模板中调用属性方法sendToy。
    // defineProps(['car', 'sendToy'])

    
    // 2、直接写方法（fasongToy），并先保存属性值，再在方法中调用属性方法（sendToy）。
    // 先接收属性并保存
    const props = defineProps(['car', 'sendToy'])
    function fasongToy() {
        if (props.sendToy) {
            props.sendToy(toy.value)
        }
    }
    
    
</script>

<style scoped>

</style>