<template>
    <div class="father slot">
        <!-- 作用域插槽：数据都在子组件中获取和维护，但是具体怎么展示是父组件决定的！
        作用域插槽就是在插槽上传值（可以理解为props），然后使用插槽的地方可以收到传来的值，从而根据值来展示。 -->

        <!-- 接收作用域插槽的传值 -->
        <Game v-slot="{games}">
            <!-- <template v-slot="{games}">
                <ul>
                    <li v-for="g in games" :key="g.id"> {{ g.name }}</li>
                </ul>
            </template> -->

            <ul>
                <li v-for="g in games" :key="g.id"> {{ g.name }}</li>
            </ul>
        </Game>
    </div>
</template>

<script lang='ts' setup>
    import Game from './Game.vue';
</script>

<style scoped>
    .slot {
        width: auto;
        background: cyan;
        margin-top: 20px;
    }
    .content {
        display: flex;
        justify-content: space-evenly;
    }

    img {
        width: 100%;
    }
    video {
        width: 100%;
    }
</style>