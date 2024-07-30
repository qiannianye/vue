import { defineStore } from "pinia";
import axios from 'axios'
import { nanoid } from 'nanoid'
import { reactive } from "vue";

// 使用defineStore存储数据，defineStore有两个参数：
// 第一个参数：字符串，也就是store的标志，名字，相当于key。 也就是说store的本质其实是一个对象，然后里面存了很多的key-value，每组key-value对应的就是使用数据时创建的store实例。
// 第二个参数：有两种写法，一种是选项式，也就是对象，然后里面很多配置项。 一种是函数式写法，跟setup一样，必须有返回值。


// 第一种写法：选项式写法。
/*
export const useTalkStore = defineStore('talk', {
    actions: {
        async getTalk() {
            try {
                // 多层解构赋值+重命名
                const { data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
                this.talkList.unshift({id: nanoid(), title})
            } catch (error) {
                console.log('@@获取土味情话失败!', error)
            }
        }
    },

    state() {
        return {
            // 断言Json.parse解析的就是string，解析不到string返回null，如果前面返回null，则最后将空数组[]赋值给talkList。
            // 使用缓存中的数据，刷新页面数据不丢失。
            talkList: JSON.parse(localStorage.getItem('talks') as string) || []

            // // 刷新丢失数据
            // talkList: [
            //     {id: '001', title: '你今天怪怪的，哪里怪？怪好看的！'},
            //     {id: '002', title: '草莓，蓝莓，蔓越莓，你想我了没？'},
            //     {id: '003', title: '给你留了一块地，什么地？我的死心塌地！'},
            // ]
        }
    }
})
*/



// 第二种写法：函数式写法。该写法最后一定要把数据和方法返回
export const useTalkStore = defineStore('talk', () => {

    // 数据直接定义，相当于state
    let talkList = reactive(
        JSON.parse(localStorage.getItem('talks') as string) || []
    )

    // 方法直接定义，相当于actions里的一个个的方法 
    async function getTalk() {
        try {
            // 多层解构赋值+重命名
            const { data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            talkList.unshift({id: nanoid(), title})
        } catch (error) {
            console.log('@@获取土味情话失败!', error)
        }
    }

    return { talkList, getTalk}
})


