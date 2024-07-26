import { defineStore } from "pinia";

// 使用defineStore存储数据，defineStore有两个参数：
// 第一个参数：字符串，也就是store的标志，名字，相当于key。
// 第二个参数：有两种写法，一种是选项式，也就是对象，然后里面很多配置项。 一种是函数式写法，跟setup一样，必须有返回值。

// 一般store都是以use命名开头，写成hooks的形式
// 选项式写法的store
export const useCounterStore = defineStore('counter', {
    // 选项式时，state必须得写成函数，不能写成对象，且必须有返回值。
    // 真正存储数据的地方
    state() {
        return {
            sum: 8
        }
    }
})