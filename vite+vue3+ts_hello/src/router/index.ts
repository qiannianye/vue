// 创建一个路由器，并暴露出去，一般一个项目只需要一个router就够了

/**
 * 注意：这里引入之前要先安装vue-router，安装命令npm i vue-router，安装的是最新的。
 * 一般项目创建的时候会询问是否安装vue-router，一般都选择是。
 * 本创建项目时选择的否，没安装，所以在用到路由的时候需要自己手动安装。
 */

/**
 * 什么是路由器？
 * 路由器是管理一个一个的路由的，本质是一个js对象。
 * 什么是路由？
 * 路由是一种页面/组件跳转规则，每个路由是一组key-value组成的组合。
 */

// 每个标准化的项目里src下都有types、hooks、router、components、utils、views/pages等文件夹。

// 引入路由组件
// 什么是路由组件？ 路由组件不是自己写标签比如<Home/>展示出来的，而是通过路由的规则渲染出来的，配置在路由里的组件。
// 什么是一般组件？ 通过标签展示出来的组件都是一般组件，比如<Home/>。
// 路由组件一般都在项目src/views文件夹内，或者src/pages文件夹内。一般组件放在src/components文件夹内。
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'

// 从vue-router中引入创建路由器router的方法createRouter
import { createRouter, createWebHistory } from 'vue-router'

// 创建路由器，并默认暴露
export default createRouter({
    history: createWebHistory(), //路由的工作模式：histor、hash。注意在创建路由器的时候，vue3一定要制定路由器的工作模式，也就是history选项必须配置。
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: '/news',
        component: News
    }, {
        path: '/about',
        component: About
    }]
})
