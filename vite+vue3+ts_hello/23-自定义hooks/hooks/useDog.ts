import { ref, reactive, onMounted } from 'vue'
import axios from 'axios';

export default function() {
    let dogs = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_187.jpg'
    ])

    // hooks里也可以调用生命周期钩子，跟在组件中一样的，而且每个hooks各有各的钩子。一上来就先做下请求数据。
    onMounted(() => {
        addGog()
    })

    // 获取数据的请求
    async function addGog() {
        try {
            let res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            console.log('@@res：', res)
            dogs.push(res.data.message)
        } catch (error) {
            console.log('@@error：', error)
        }
    }

    // 将外部要使用的数据和方法抛出
    return {dogs, addGog}
}