// 引入创建app的vue方法
import { createApp } from 'vue'

// 引入根组件App，同一路径下使用相对路径./
import App from './App.vue'

// 引入pinia
import { createPinia } from 'pinia'

// 创建根组件app
const app = createApp(App)

// 创建pinia
const pinia = createPinia()
// 使用pinia
app.use(pinia)

// 挂载根组件到根div容器上
app.mount('#app')


/**
 * 搭建pinia环境：
 * 1、安装：npm i pinia 或者yarn add pinia
 * 2、在main.ts/main.js中引入：import { createPinia } from 'pinia'
 * 3、使用createPinia创建pinia：const pinia = createPinia()
 * 4、在app中使用pinia：app.use(pinia)
 * 5、在调试栏-vue下可以看到一个菠萝标志，就是pinia环境搭建OK了。
 */