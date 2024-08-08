<template>
    <div class="father">
        【适用于父子间的通信】
        <div class="navigator">
            <button @click="goToPage('/slot/default')">默认插槽</button>
            <button @click="goToPage('/slot/name')">具名插槽</button>
            <button @click="goToPage('/slot/scope')">作用域插槽</button>
        </div>
        <RouterView></RouterView>
    </div>
</template>

<script lang='ts' setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()

    // 跳转到不同的页面
    function goToPage(path: string) {
        router.push({
            path: path
        })
    }
</script>

<style scoped>
    .navigator {
        margin-top: 20px;
        background: lightpink;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        display: flex;
        justify-content: space-evenly;
    }
</style>