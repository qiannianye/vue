<template>
    <div class="app">
        <h1>我是app组件</h1>
        <!-- <h3 id="title">父组件title，id作为唯一标识</h3> -->
        <!-- 1、html标签上使用ref，父组件和子组件名字一样的ref，互不干扰 -->
        <h3 ref="title">父组件【html标签】，【ref】引用</h3> 
        <input ref="input" placeholder="父组件【html标签】，【ref】引用" />
        <button @click="getParentComponentDom">获取父元素的html标签dom</button>
        <!-- 2、组件上使用ref -->
        <Person ref="child" />
        <button @click="getChildComponentDom">获取父元素的子组件【Person组件】dom</button>
        <!-- 3、列表v-for使用ref，需要 v3.2.25 及以上版本-->
        <li v-for="(item,index) in list" :key="index" ref="listRef"> 我是list：{{ item }}</li>
        <button @click="getListDom">获取列表的dom</button>
        <!-- 4、函数式ref -->
        <input placeholder="内联函数写法" :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ console.log('@@内联函数el:', el) }">
        <input placeholder="普通函数写法" :ref="handleFunRef">
    </div>
</template>

<script lang='ts' setup name="Person">
//引入子组件Person
import Person from './components/Person.vue'
import { ref, onMounted, watchEffect } from 'vue'
const title = ref()
const input = ref()
const child = ref()
const list = ref(['苹果', '香蕉', '桃子'])
const listRef = ref([]) //和【普通类型】的ref引用不同，数组的ref引用是数组
const funRef = ref() //函数式模板引用的ref


//获取html标签的ref，得到的是html标签
function getParentComponentDom() {
    console.log('@@获取父组件的dom元素:', title.value) //打印结果：<h3>父组件title，【ref】作为唯一标识</h3>，样式中未使用scoped，所以标签中没有data-v-4cadc14e=""。
}
//获取组件的ref引用，得到的是组件实例。
function getChildComponentDom() {
    console.log(child.value) //打印结果是子组件实例，
    //但是这里要注意：
    //打印虽是子组件实例，但却无法访问子组件的数据，因为子组件如果是使用<script setup>，是默认私有的，被保护的,需要子组件使用defineExpose暴露后才能访问。
    /**
     * 如果一个子组件使用的是选项式 API 或没有使用 <script setup>，被引用的组件实例和该子组件的 this 完全一致，这意味着父组件对子组件的每一个属性和方法都有完全的访问权。
     * 这使得在父组件和子组件之间创建紧密耦合的实现细节变得很容易，当然也因此，应该只在绝对需要时才使用组件引用。
     * 大多数情况下，你应该首先使用标准的 props 和 emit 接口来实现父子组件交互。
     */
}
//获取列表的dom，得到的是dom列表，注意：listRef 数组并不保证与源数组 list 相同的顺序。
function getListDom() {
    console.log('@@列表ref:', listRef.value)
}

// 注意：挂载完毕后才能获取到ref的引用，否则为空，使用时注意，需判空。
onMounted(() => {
    console.log('@@挂载完毕v-for_ref：', listRef.value)
    // debugger
    console.log('@@挂载完毕input_ref：', input.value.focus()) //input挂载完毕后聚焦
})

/**
 * 注意，你只可以在组件挂载后才能访问模板引用。如果你想在模板中的表达式上访问 input，在初次渲染时会是 null。这是因为在初次渲染前这个元素还不存在呢！
 * 如果你需要侦听一个模板引用 ref 的变化，确保考虑到其值为 null 的情况：
 */
 watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})

/**
 * 除了使用字符串值作名字，ref attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数：
 * 注意：我们这里需要使用动态的 【:ref】 绑定才能够传入一个函数。当绑定的元素被卸载时，函数也会被调用一次，此时的 el 参数会是 null。你当然也可以绑定一个组件方法而不是内联函数。
 */
//函数式模板引用ref
function handleFunRef(el) {
    console.log('@@函数式模板引用：', el)
    funRef.value = el
}

</script>

<style>
    .app {
        background-color: gray;
        border: 1px solid rgb(222, 199, 244);
        margin: 20px;
    }
</style>