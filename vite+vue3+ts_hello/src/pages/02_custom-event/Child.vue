<template>
    <div class="child">
        <h4>我是子组件</h4>
        <h5>子的玩具：{{ toy }}</h5>
        <!-- 自定义事件直接在模板中触发，自定义事件也是使用$event占位事件参数 -->
        <button @click="emit('send-toy', toy, $event)">把玩具给父</button>
        <!-- 自定义事件通过按钮点击，在点击方法中触发 -->
        <!-- <button @click="fasongToy">把玩具给父</button> -->
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'

    let toy = ref('奥特曼')

    // 声明事件
    const emit = defineEmits(['send-toy'])
    console.log('@@子组件声明的事件：', emit)


    // 总结：自定义事件，一般适用子组件向父组件传值，要先在子组件声明事件，然后在子组件中触发事件的调用。
    // 1、声明：const emit = defineEmits(['xxx'])，其中xxx是自定义事件的名字。
    // 2、触发：emit('xxx', argument1, argument2,..., event)，其中xxx是自定义事件的名字。
    // 声明和触发时，自定义事件的名字要保持一致。

    // 在方法里触发事件
   /*  // 下面这种写法：event已经被弃用了
    function fasongToy() {
        emit('send-toy', toy.value, event) 
    } */

   /*  // 如果想把event实例对象传给父，可以使用下面这种写法
    function fasongToy(event: Event) {
        emit('send-toy', toy.value, event) 
    } */

</script>

<style scoped>

</style>