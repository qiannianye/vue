import { defineStore } from "pinia";

export const useTalkStore = defineStore('talk', {
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