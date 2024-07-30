<template>
    <h3>vue3组件通信</h3>
    <div class="navigator">
        <RouterLink class="navigator-item" to="/props">1、props</RouterLink>
        <RouterLink class="navigator-item" to="/custom-event">2、custom-event</RouterLink>
        <RouterLink class="navigator-item" to="/mitt">3、miit</RouterLink>
        <RouterLink class="navigator-item" to="/props">4、v-model</RouterLink>
        <RouterLink class="navigator-item" to="/props">1、props传值</RouterLink>
        <RouterLink class="navigator-item" to="/props">1、props传值</RouterLink>
        <RouterLink class="navigator-item" to="/props">1、props传值</RouterLink>
        <RouterLink class="navigator-item" to="/props">1、props传值</RouterLink>
    </div>
    <div class="content">
        <RouterView></RouterView>
    </div>
</template>

<script lang='ts' setup>
    import { RouterLink } from 'vue-router';


    // 需求：组件Counter和组件LoveTalk要互相通信，数据共享。
</script>

<style scoped>
    h3 {
        text-align: center;
        background: cadetblue;
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 150px;
        color: white;
    }

    .navigator {
        float: left;
    }

    .navigator-item {
        display: block;
        background: lightcyan;
        width: max-content;
        padding: 10px;
        margin-top: 10px;
        color: cadetblue;
    }

    .content {
        float: left;
        margin-left: 60px;
        margin-top: 10px;
    }
</style>