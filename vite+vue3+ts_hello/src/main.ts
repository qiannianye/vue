// 引入创建app的vue方法
import { createApp } from 'vue'

// 引入根组件App，同一路径下使用相对路径./
import App from './App.vue'

// 引入路由器
import router from './router'
// console.log('@@router：', router)

// 创建根组件app
const app = createApp(App)

// 使用路由器
app.use(router)

// 挂载根组件到根div容器上
app.mount('#app')