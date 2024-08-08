<template>
    <div class="father slot">
        <!-- 作用域插槽：数据都在子组件中获取和维护，但是具体怎么展示是父组件决定的！
        作用域插槽就是在插槽上传值（可以理解为props），然后使用插槽的地方可以收到传来的值，从而根据值来展示。 -->

        <!-- 下面是不带名字带传值的插槽，也就是默认作用域插槽，这样的话标题和内容必须按照先后顺序写，UI结构才能不乱，否则就会乱。
        为了解决这个问题，可以使用具名作用域插槽，这样在写插槽内容的时候就可以不必按照顺序写，也能正确展示UI结构。  -->
        <!-- 接收作用域插槽的传值（直接解构的方式接收slot的传值） -->
        <Game v-slot="{games, title}">
            <ul>
                <li v-for="g in games" :key="g.id"> {{ g.name }}</li>
            </ul>
            <h4>{{title}}</h4>
        </Game>
        <Game>
            <template v-slot="{games}">
                <ol>
                    <li v-for="g in games" :key="g.id"> {{ g.name }}</li>
                </ol>
            </template>
            <!-- 虽然标题写在了内容的下面，但实际插槽占位的地方标题是在内容上面的，所以你能正确的顺序展示 -->
            <!-- 带名字和作用域的插槽的 插入内容 -->
            <template v-slot:s1="{title}">
                <h4>{{ title }}</h4>
            </template>
        </Game>
        <Game>
            <!-- 带名字作用域插槽，还可以这样写 -->
            <template #s2="{imgUrl}">
                <img :src="imgUrl">
            </template>
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
        display: flex;
        justify-content: space-evenly;
    }
   
    img {
        width: 100%;
    }
    video {
        width: 100%;
    }


    h4 {
        text-align: center;
        background: yellow;
    }
</style>