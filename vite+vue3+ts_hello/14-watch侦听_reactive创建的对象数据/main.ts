//引入创建app的vue方法
import { createApp } from 'vue'

//引入根组件App，同一路径下使用相对路径./
import App from './App.vue'

//创建根组件并将其挂载到根div容器上
createApp(App).mount('#app')