<template>
    <div class="child">
        <h4>我是子组件</h4>
        <!-- 默认写法 -->
        <!-- <input :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"> -->

        <!-- v-model在使用时改了名字的写法 -->
        <input :value="mingzi" @input="emit_2('update:mingzi', (<HTMLInputElement>$event.target).value)">
        <input :value="mima" @input="emit_2('update:mima', (<HTMLInputElement>$event.target).value)">
    </div>
</template>

<script lang='ts' setup>
    // // 接收props modelValue
    // defineProps(['modelValue'])
    // // 声明事件
    // const emit = defineEmits(['update:modelValue'])

    // 改了名字的v-model的props的接收和事件的声明
    defineProps(['mingzi', 'mima'])
    const emit_2 = defineEmits(['update:mingzi', 'update:mima'])
</script>

<style scoped>
    input {
        border: 1px solid #249fe2;
        background: #f3fa87;
        color: #1d101d;
        padding: 5px;
        border-radius: 6px;
        display: block;
        margin-top: 10px;
    }
</style>