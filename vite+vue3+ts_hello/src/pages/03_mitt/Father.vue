<template>
    <div class="father">
        【适用于任意组件间的通信】
        <h4>我是父组件</h4>
        <Child_1 />
        <Child_2 />
    </div>
</template>

<script lang='ts' setup name="Mitt">
    import Child_1 from './Child_1.vue';
    import Child_2 from './Child_2.vue';

    // mitt：跟$bus、pubsub一样，相当于总线。
    // 1、接收数据的：需提前绑定好事件（提前订阅消息）。
    // 2、发送数据的：在合适的时候触发绑定的事件（发布消息）。

    // 使用mitt，
    // 1、第一步先安装依赖：npm i mitt 或者yarn add mitt。
    // 2、在src/util或者src/tools下创建emitter.ts 或者emitter.js文件。如果src下没有工具文件夹，就创建一个。
    // 3、在emitter文件中，引入mitt，import mitt
</script>

<style scoped>

</style>