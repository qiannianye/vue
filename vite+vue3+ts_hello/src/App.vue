<template>
    <h3>vue3组件通信</h3>
    <div class="navigator">
        <RouterLink class="navigator-item" active-class="active" to="/props">1、props</RouterLink>
        <RouterLink class="navigator-item" active-class="active" to="/custom-event">2、custom-event</RouterLink>
        <RouterLink class="navigator-item" active-class="active" to="/mitt">3、miit</RouterLink>
        <RouterLink class="navigator-item" active-class="active" to="/model">4、v-model</RouterLink>
        <RouterLink class="navigator-item" active-class="active" to="/attrs">5、attrs透传</RouterLink>
        <RouterLink class="navigator-item" active-class="active" to="/refs">6、$refs和$parent</RouterLink>
        <RouterLink class="navigator-item" active-class="active" to="/provide">7、provide和inject</RouterLink>
        <RouterLink class="navigator-item" active-class="active" to="/pinia">8、pinia</RouterLink>
        <RouterLink class="navigator-item" active-class="active" to="/slot-default">9、slot-默认插槽</RouterLink>
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
    .navigator .active {
        background: skyblue;
        color: white;
    }

    .content {
        float: left;
        margin-left: 60px;
        margin-top: 10px;
    }
</style>