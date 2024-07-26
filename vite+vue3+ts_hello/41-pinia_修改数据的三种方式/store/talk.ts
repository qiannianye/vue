import { defineStore } from "pinia";
import axios from 'axios'
import { nanoid } from 'nanoid'

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
            talkList: [
                {id: '001', title: '你今天怪怪的，哪里怪？怪好看的！'},
                {id: '002', title: '草莓，蓝莓，蔓越莓，你想我了没？'},
                {id: '003', title: '给你留了一块地，什么地？我的死心塌地！'},
            ]
        }
    }
})