<template>
    <div>我是home</div>
</template>

<script lang='ts' setup name="Home">
    import { onMounted, onUnmounted } from 'vue'
    import { useRouter } from 'vue-router'

    // 获取路由器
    const router = useRouter()

    // 需求：在主页（home页面）展示3s后，自动跳转到新闻页面（news）。
    // 分析：使用<RouterLink>标签做路由跳转，无法实现，就需要使用【编程式路由】了。
    onMounted(() => {
        console.log('@@Home组件挂载了')
        // 下面这种写法正确
        // const router = useRouter() 
        // console.log('@@路由器:', router)
        setTimeout(() => {
            // 注意：下面这句代码获取不到router，打印结果是undefined。获取router或者route不能在异步函数的回调方法中调用！！！
            // 报错：inject() can only be used inside setup() or functional components.
            // const router = useRouter() 
            console.log('@@路由器:', router)
            // 使用路由器的方法跳转，即编程式路由
            router.push(`/news`)
        }, 3000)
    })

    onUnmounted(() => {
        console.log('@@Home组件卸载了')
    })
</script>

<style scoped>

</style>