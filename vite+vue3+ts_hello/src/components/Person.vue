<template>
    <div class="person">
        <h1>Person组件</h1>
        <h3>求和为：{{ sum }}</h3>
        <button @click="add"></button>
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive, onMounted } from 'vue'
    import axios from 'axios';

    let sum = ref(0)
    let dogs = reactive(['柯基'])

    

    function add() {
        sum.value += 1
    }

    onMounted(() => {
        getDogs()
    })

    async function getDogs() {
        try {
            let res = await axios.get('https://apitest2.cardqu.com/product/list?page=0&pageSize=10&tagId=-1', {
                headers: {
                    Authorization: 'BEARER D37130DBC88F6794B29A0E85E56DC5A95A0CB1C1A9F7073372AE970B1FB49F49890143642225207C159A8275063040952ECDF6DC58350C397987D31F02C21952D8677CAD4630648B88A5B83FF9ACFDCC61512E41CB459B9CD327A6003B67AA78D8387B38A53C2DA8DA0688129CE5414E2D2D16318C340898DE5ED138803C07DEA0225BD59C6EE2B468299B90DE0EEA255D956AF325B1F7E9AAC1D217FD6012FC'
                },
                method: 'get'
            })
            console.log('@@res：', res)
        } catch (error) {
            console.log('@@error：', error)
        }
    }

</script>

<style scoped>
    /* scoped: 局部样式标记，代表style里的样式只在本文件内生效，与其他文件里的同名样式互不干扰。 */
    .person {
        background-color: skyblue;
        border: 1px solid blueviolet;
        margin: 20px;
        padding: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>