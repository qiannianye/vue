<template>
    <div class="child">
        <h4>我是子组件2</h4>
        <h5>子组件2的电脑：{{ computer }}</h5>
        <button @click="sendComputer">把电脑给子组件1</button>
        <h6 v-if="toy">接收的 玩具：{{ toy }}</h6>
    </div>
</template>

<script lang='ts' setup>
    import { onUnmounted, ref } from 'vue'
    import emitter from '@/utils/emitter';

    let computer = ref('戴尔')
    let toy = ref('')

    // 绑定事件
    emitter.on('send_toy', (value: any) => {
        console.log('@@子组件2收到子组件1的玩具了：', value)
        toy.value = value
    })

    // 送电脑
    function sendComputer() {
        emitter.emit('send_computer', computer.value)
    }

    // 注意：一般使用事件的时候，都在组件卸载的时候，将事件解绑！
    onUnmounted(() => {
        emitter.off('send_toy')
    })
</script>

<style scoped>

</style>