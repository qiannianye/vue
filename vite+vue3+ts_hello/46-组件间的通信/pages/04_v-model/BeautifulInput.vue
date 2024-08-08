<template>
    <div class="child">
        <h4>我是子组件：vue3.4及之后的写法</h4>
        <!-- 不带名字的v-model的接收 -->
        <!-- <input v-model="model"> -->
        <!-- 带名字的v-model的接收  -->
        <!-- <input v-model="mingzi">  -->
        <!-- 接收多个v-model -->
        <!-- <input v-model="mingzi">
        <input v-model="mima">  -->
        <!-- v-model自定义修饰符 -->
        <input v-model="model"> 
    </div>
</template>

<script lang='ts' setup>
    // vue3.4 的v-model写法  
    
    // 不带名字的v-model的接收
    // const model = defineModel()

    // 带名字的v-model的接收
    // const mingzi = defineModel('mingzi', {required: true})

    // 多个v-model的接收
    const mingzi = defineModel('mingzi')
    const mima = defineModel('mima')

    // v-model修饰符
    const [model, modifiers] = defineModel({
        set (value: string) {
            if (modifiers.capitalize){
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
            return value
        }
    })
</script>

<style scoped>

</style>