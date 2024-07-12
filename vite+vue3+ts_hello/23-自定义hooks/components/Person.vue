<template>
    <div class="person">
        <h1>Person组件</h1>
        <h3>求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h3>
        <button @click="add">点我加1</button>
        <div>
            <img v-for="(d,index) in dogs" :key="index" :src="d" />
        </div>
        <button @click="addGog">点击添加一只狗</button>
    </div>
</template>

<script lang="ts" setup>
    // 使用hooks实现
    import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';
    const { sum, bigSum, add } = useSum()
    const { dogs, addGog } = useDog()

    // 下面是未使用hooks的实现
    /*
    import { ref, reactive, onMounted } from 'vue'
    import axios from 'axios';

    let sum = ref(0)
    let dogs = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_187.jpg'
    ])

    // hooks里也可以使用计算属性
    let computedSum = computed(() => {
        return sum.value * 10
    })

    onMounted(() => {
        add()
        addGog()
    })

    // 加方法
    function add() {
        sum.value += 1
    }

    // 获取数据的请求
    async function addGog() {
        try {
            let res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log('@@res：', res)
            dogs.push(res.data.message)
        } catch (error) {
            console.log('@@error：', error)
        }
    }*/

</script>

<style scoped>
    /* scoped: 局部样式标记，代表style里的样式只在本文件内生效，与其他文件里的同名样式互不干扰。 */
    .person {
        background-color: skyblue;
        border: 1px solid blueviolet;
        margin: 20px;
        padding: 20px;
    }
    img {
        margin-top: 10px;
        margin-right: 10px;
        width: 100px;
    }
    button {
        margin-top: 10px;
    }
</style>