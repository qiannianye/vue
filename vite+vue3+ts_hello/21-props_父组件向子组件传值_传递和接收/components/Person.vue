<template>
    <div class="person">
        <h1>Person组件：接收props</h1>
        <h3>a: {{ a }} c:{{ c}}</h3>
        <ul>
            <li v-for="p in list" :key="p.id"> {{ p.name }} - {{ p.age }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    /**
     * defineProps() 
     * 1、宏函数，无需引入，可以直接使用。
     * 2、接收一个字符串数组或者对象参数，用来解析接收的属性值。
     */
    // 字符串数组解析接收的属性
    // 接收【字面量】props，如果a只是在template中使用，那么可以不必存储起来，可直接在模板template中使用。
    // defineProps(['a', 'b']) 
    // 下面这句代码错误，虽然接收了a、b属性，但并没有存储起来，只能在模板template中访问，不能在script标签中访问，因为script中压根没有a这个变量。
    // console.log('@@打印a：', a)
    // 下面这种写法是错误的，不能直接写一个变量名，即使变量名和父组件传递props时的名字一样，也不可以。
    // defineProps(a)

    // 接收【变量，即父组件传递的时候不是固定值，而是一个变量】props
    // defineProps(['c']) //接收普通类型的变量
    // defineProps(['person']) //对象props
    // defineProps(['persons']) //数组props

    // 接收所有props，并存储起来，且在模板template中还是直接使用属性名访问，例如使用list，模板中直接使用list，而不是使用props.list。
    // const props = defineProps(['a', 'b', 'c', 'person', 'list'])
    // console.log('@@props:', props)

    //也可以结构赋值
    const { a, c, person } = defineProps(['a', 'c', 'person', 'list'])
    if (c >= 100) {
        console.log('@@c大于等于100打印')
    }

    // 对象解析接收的props
    // 对于以对象形式声明的每个属性，key 是 prop 的名称，而值则是该 prop 预期类型的构造函数。比如，如果要求一个 prop 的值是 number 类型，则可使用 Number 构造函数作为其声明的值。
    // defineProps({a: String, c: Number})
    
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