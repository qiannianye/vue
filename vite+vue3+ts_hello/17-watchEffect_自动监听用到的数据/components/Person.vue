<template>
    <div class="person">
       <h3>watchEffect监听</h3>
       <h4 ref="tempRef">水温：{{tempr }}</h4>
       <h4 ref="heightRef">水位：{{ height }}</h4>
       <button @click="changeTempr">改变水温</button>
       <button @click="changeHeight">改变水位</button>
    </div>
</template>

<script lang="ts" setup>
   import { ref, watchEffect, watch, watchPostEffect, onBeforeUpdate, onUpdated } from 'vue'
   let tempr = ref(10)
   let height = ref(0)
   let tempRef = ref()
   let heightRef = ref()

   function changeTempr() {
    tempr.value += 10
   }
   function changeHeight() {
    height.value += 20
   }

   //注意：生命周期函数的调用顺序和写在文件里的顺序无关！和写的顺序无关！和写的顺序无关！
    // onBeforeUpdate(() => {
    //     console.log('@@组件更新前')
    // })
    // onUpdated(() => {
    //     console.log('@@组件更新完毕')
    // })
   
   // 使用watch监听，没问题
//    watch([tempr, height], (newValue, oldValue) => {
//     console.log('@@watch监听:', newValue, oldValue)
//     const [t, h] = newValue
//     const [ot, oh] = oldValue
//     if ((t >= 60 && t != ot) || (h >= 80 && h != oh)) {
//         console.log('@@watch水温或者水位达标了，发送请求!')
//     }
//    })

   //使用watchEffect监听，自动监听回调函数中用到的数据，且如果在回调函数中使用异步请求，只会监听await返回之前的数据。
   watchEffect((res) => {
    // console.log('@@watchEffect监听:', res)
   
    /**
     * 下面这种写法，有问题：
     * 1、当水温的值达到一定值后，就监测不到水位的变化了，即使水位值达到一定值了，打印也不会触发。只有水温再次发生改变时才能触发打印。 
     * 2、反过来先判断水位后判断水温（height.value >= 80 || tempr.value >= 60）也是一样的结果。
     */
    // if (tempr.value >= 60 || height.value >= 80) {
    //     console.log('@@watchEffect水温或者水位达标了，发送请求!')
    // }

    /**
     * 下面这种写法，有问题：
     * 1、当水温的值达到一定值后，就监测不到水位的变化了，即使水位值达到一定值了，打印也不会触发。只有水温再次发生改变时才能触发打印。 
     * 2、反过来先判断水位后判断水温（height.value >= 80 || tempr.value >= 60）也是一样的结果。
     */
    // if (heightRef.value != undefined) {
    //     console.log('@@水位标签tag:', heightRef.value.innerHTML)
    //     // console.log('@@水位标签tag:', heightRef.value.innerHTML)
    //     const temp_html = tempRef.value.innerHTML.split('：')
    //     const temp_value = temp_html[1]? temp_html[1] : 0

    //     const height_html = heightRef.value.innerHTML.split('：')
    //     const height_value = height_html[1]? height_html[1] : 0

    //     if ((temp_value != tempr.value && tempr.value >= 60) || (height_value != height.value && height.value >= 80)) {
    //         console.log('@@变化了，发送请求')
    //     }
    // }
    
    /**
     * 下面这样写，有问题：
     * 水温和水位达到一定值后都会触发打印，但是，当两个值都达到一定值后，只改变其中一个值的时候，会触发两次打印。
     */
    // if (tempr.value >= 60) {
    //     console.log('@@watchEffect水温达标了，发送请求!')
    // }
    // if (height.value >= 80) {
    //     console.log('@@watchEffect水位达标了，发送请求!')
    // }

    /**
     * 下面这种写法，ok
     * 由于回调是在当前组件更新之前执行的，所以相当于dom元素中的值是旧值，而tempr和height是最新值。
     * 由于watchEffect一上来就会先执行一次回调函数（不管监视源是否改变都先执行一次）,所以在获取dom元素的时候，如果flush不是post模式，要先判断下undefined的情况，否则会报错。
     */
    console.log('@@水温标签tag:', tempRef.value)
    if (tempRef.value != undefined) {
        console.log('@@水温标签tag:', tempRef.value.innerHTML)
        // console.log('@@水位标签tag:', heightRef.value.innerHTML)
        const temp_html = tempRef.value.innerHTML.split('：')
        const temp_value = temp_html[1]? temp_html[1] : 0
        if (temp_value != tempr.value && tempr.value >= 60) {
            console.log('@@水温变化了')
        }
    }

    if (heightRef.value != undefined) {
        console.log('@@水位标签tag:', heightRef.value.innerHTML)
        // console.log('@@水位标签tag:', heightRef.value.innerHTML)
        const height_html = heightRef.value.innerHTML.split('：')
        const height_value = height_html[1]? height_html[1] : 0
        if (height_value != height.value && height.value >= 80) {
            console.log('@@水位 变化了')
        }
    }

    //综上所述：监听最好还是用watch，watchEffect容易出错，当然也要看情况。
    //flush: 回调函数调用时机，'pre' | 'post' | 'sync'。
    //pre：默认值，父组件更新后，当前所在组件更新前调用。
    //post：父组件和所在组件更新后调用，如需在watchEffect回调函数中访问更新后的dom，需设置为post。
    //sync：同步，组件更新和回调函数同步执行。

    /**
     * 同步创建watchEffect，默认是同步创建的，会自动绑定在当前组件上，并在组件卸载时自动停止监听，一般不需要单独维护。如需条件判断，可在回调函数中做判断。
     */
    // watchEffect(() => {
    //     //条件判断
    //     // if () {

    //     // }
    // })

    /**
     * 异步创建watchEffect，不会自动绑定在当前组件上，需要自己维护停止监听。一般不推荐使用异步监听。如需条件判断，可在回调函数中做判断。
     */
    // setTimeout(() => {
    //     const stopWatch = watchEffect(() => {

    //     })

    //     //需要手动关闭监听
    //     stopWatch()
    // }, 1000);
   
   }, {
    flush: 'pre',
    onTrigger: () => {
        // debugger
    }
   })

//    watchPostEffect(() => {
//     console.log('@@watchPostEffect:')
//    })



</script>

<style scoped>
    /* scoped: 局部样式标记，代表style里的样式只在本文件内生效，与其他文件里的同名样式互不干扰。 */
    .person {
        background-color: skyblue;
        border: 1px solid blueviolet;
        margin: 20px;
        padding: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>