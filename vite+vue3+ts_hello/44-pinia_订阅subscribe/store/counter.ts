import { defineStore } from "pinia";

// 使用defineStore存储数据，defineStore有两个参数：
// 第一个参数：字符串，也就是store的标志，名字，相当于key。
// 第二个参数：有两种写法，一种是选项式，也就是对象，然后里面很多配置项。 一种是函数式写法，跟setup一样，必须有返回值。

// 一般store都是以use命名开头，写成hooks的形式
// 选项式写法的store
export const useCounterStore = defineStore('counter', {
    // action里存放的是真正修改数据的一个个的方法,用于响应组件的各个“动作”.
    actions: {
        increment(value: number) {
            // console.log('@@increment被调用了!',value)
            // this其实是useCounterStore的实例对象
            // console.log('@@this是什么？',this)
            // this.sum += value

            // 判断逻辑
            if (this.sum < 10) {
                this.sum += value
            }
        },
        descrement(value: number) {
            this.sum -= value;
        }
    },

    // 选项式时，state必须得写成函数，不能写成对象，且必须有返回值。
    // 真正存储数据的地方
    state() {
        return {
            sum: 8,
            schoolName: 'yingcai',
            address: 'ddddd'
        }
    },

    // getters，对数据的加工。
    getters: {
        // 其实getters里的数据，就是计算属性。

        // bigSum，会接收到一个state参数，必须有一个返回值。
        // 1、如果在其方法内部要使用this，则bigSum必须写成普通函数。如果不使用this，则可以使用箭头函数。
        // 2、bigSum里的this跟state即其他配置项里的this一样，都指向对象实例。

        // 第一种写法：普通函数。
        // bigSum(state) {
        //     return state.sum * 10
        // },

        // 第二种写法：箭头函数
        bigSum: state => state.sum * 10,
        
        // 第三种写法：内部使用this，不使用state。
        upperSchool(): string {
            return this.schoolName.toUpperCase()
        }
    }
})