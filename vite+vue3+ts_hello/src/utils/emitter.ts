// 引入mitt
import mitt from "mitt";

// 调用mitt
const emitter = mitt()
/* 
// 绑定事件1，不带参数
emitter.on('test0', () => {
    console.log('@@test0触发了:')   
})

// 绑定事件2，带一个参数
emitter.on('test1', (param) => {
    console.log('@@test1触发了:', param)   
})

// 绑定事件3，带两个参数
emitter.on('test2', (res) => {
    console.log('@@test2触发了:', res)   
})

// test触发事件
// setTimeout(() => {
//     emitter.emit('test0')
//     emitter.emit('test1', 5)
//     emitter.emit('test2', [9, '哈哈哈'])
// }, 3000);

setInterval(() => {
    emitter.emit('test0')
    emitter.emit('test1', 5)
    emitter.emit('test2', [9, '哈哈哈'])
}, 1000)

// 解绑
setTimeout(() => {
    // 指定事件的解绑
    emitter.off('test0')
    emitter.off('test1')
}, 4000);

// 解绑全部
setTimeout(() => {
    emitter.all.clear()
}, 10000); */

// 暴露出去
export default emitter

/* // 调用mitt并暴露出去, 下面这行代码相当于const emitter = mitt() export default emitter 这两行代码的作用
export default mitt() */

