<template>
    <div class="person">
        <h1>Person组件</h1>
        <h3>人:{{ person.name }} - {{ person.age }}</h3>
    </div>
</template>

<script lang="ts" setup>
    // 当person没有做类型限定时，某个属性写错时（比如name写成nmae），编译器不会报错，也没有提示，只有页面上名字显示不出来，这在实际开发中不好定位问题。
    // const person = {
    //     name: '张三', 
    //     age: 18
    // }

    // 使用ts，自定义接口类型，限定person类型
    // 注意：当引入时使用‘@/’就相当于站在金字塔的塔尖src那里，但有时候引入的时候会说找不到引入的模块，这就需要查看下在vuejs+ts的项目中，
    // tsconfig.app.json中的compilerOptions配置项，是否配置了paths项，如下：
    /**
     * "compilerOptions": {
            "paths": {
                "@/*": ["./src/*"]
            }
        }
     */
    import { type PersonInter } from '@/types'
    const person

    /**
     * defineProps() 
     * 1、宏函数，无需引入，可以直接使用。
     * 2、接收一个数组或者对象参数，用来解析接收的属性值。
     */
    // 下面这种写法是错误的，不能直接写一个变量名，即使变量名和父组件传递props时的名字一样，也不可以。
    // defineProps(person)

    // 下面这种写法正确，但是没有使用变量接收，虽然模板中可以用，但是如果在scritpt标签中使用时就会报错，因为没这个变量，undefined。
    // defineProps(['person'])
    // console.log('@@person:', person)

    // 下面这种写法正确，且使用一个变量接收了结果，所以模板中可以直接使用person变量。
    // const { person } = defineProps(['person'])
    // console.log('@@子组件接收的父组件的属性：', person)

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