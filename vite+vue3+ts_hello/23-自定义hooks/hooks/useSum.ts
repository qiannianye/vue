import { ref, onMounted, computed } from 'vue'

export default function() {
    let sum = ref(0)

    // hooks里也可以使用计算属性
    let bigSum = computed(() => {
        return sum.value * 10
    })

    // hooks里也可以调用生命周期钩子，跟在组件中一样的，而且每个hooks各有各的钩子
    onMounted(() => {
        // add()
        console.log('@@挂载完毕')
    })

    // 加方法
    function add() {
        sum.value += 1
    }

    // 将外部要使用的数据和方法抛出
    return {sum, bigSum, add}
}

//export [名字]，分别暴露，后面跟的是要暴露的方法或者变量的名字
//export default [值]， 默认暴露，后面直接跟的是值，值包括普通类型的值（1，false，'hh'等）、函数(function)、对象值([1, 2, 3], {name: '123', age: 20}) 等确定的值