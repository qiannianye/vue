<template>
    <div class="child">
        <h4>我是子组件1</h4>
        <h5>子组件1的玩具：{{ toy }}</h5>
        <button @click="sendToy">把玩具给子组件2</button>
        <h6 v-if="computer">接收的 电脑：{{ computer }}</h6>
    </div>
</template>

<script lang='ts' setup>
    import { onUnmounted, ref } from 'vue'
    import emitter from '@/utils/emitter';

    let toy = ref('奥特曼')
    let computer = ref('')

    // 送玩具
    function sendToy() {
        emitter.emit('send_toy', toy.value)
    }

    // 绑定事件
    emitter.on('send_computer', (param: any) => {
        console.log('@@接收到电脑了：', param) 
        computer.value = param  
    })

    // 注意：一般使用事件的时候，都在组件卸载的时候，将事件解绑！
    onUnmounted(() => {
        emitter.off('send_computer')
    })
</script>

<style scoped>

</style>