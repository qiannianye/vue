<template>
    <div class="father">
        <button @click="show = !show">Toggle</button>
        <button @click="count++">点我加1</button>
        <!-- 注意： Transition只能包单元素-->
        <Transition appear>
            <p v-if="show">hello</p>
            <!-- 这行写在这里会编译报错， 因为Transition只能包单元素 -->
            <!-- <span :key="count">world</span> -->
        </Transition>

        <!-- 命名的Transition，过渡的css会以名字开头（fade-)，不再是v-开头 -->
        <Transition name="fade" mode="out-in">
            <!-- 动态引入组件 -->
            <component :is="show? A : B"></component>
        </Transition>

        <Transition name="fade" mode="out-in">
            <span :key="count">world{{ count }}</span>
        </Transition>
    </div>
    <C/>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';
    import A from './components/A.vue';
    import B from './components/B.vue';
    import C from './components/C.vue';

    let show = ref(false)
    let count = ref(0)
    
</script>

<style scoped>
    .fade-enter-active,
    .v-enter-active,
    .v-leave-active {
        transition: opacity 10s ease;
    }

    .fade-enter-from,
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
    span {
        color: palegreen;
    }
</style>