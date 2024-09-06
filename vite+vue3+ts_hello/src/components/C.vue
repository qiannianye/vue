<template>
    <div class="container">
        <div class="title">程序代做</div>
        <div class="content">
            <span>原生iOS</span>
            <span>Web</span>
            <span>Vue</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>小程序（微信/支付宝等）</span>
            <span>uniapp/taro</span>
            <span>Flutter</span>
            <span>鸿蒙Harmony</span>
        </div>
    </div>
</template>

<script lang='ts' setup>

</script>

<style scoped>
    .container {
        background: lightcyan;
        margin-top: 30px;
        border-radius: 4px;
        padding: 10px;
    }
    .container .title {
        text-align: center;
        font-size: 18px;
        font-weight: 800;
    }
    .container span {
        background: rgb(131, 233, 244);
        border-radius: 4px;
        padding: 4px;
        font-feature-settings: "abvm";
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-wrap: nowrap;
        margin-right: 5px;
        margin-bottom: 10px;
    }
    .container .content {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>