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
 * 路由是一种页面/组件跳转规则，每个路由是一组key-value组成的组合。比如'/home'(路径)=>'Home'(组件)
 */

// 2个注意点：
// 1、路由切换时，视觉上页面‘消失了’，其实是组件卸载了，如何证明？可在生命周期函数中得到印证，在路由切换时，看下生命周期的调用。
// 2、路由组件一般放在项目的src/views或者src/pages文件夹下。
// 每个标准化的项目里src下都有types、hooks、router、components、utils、views/pages等文件夹。

// 引入路由组件
// 什么是路由组件？ 路由组件不是自己写标签比如<Home/>展示出来的，而是通过路由的规则渲染出来的，配置在路由里的组件。
// 什么是一般组件？ 通过标签展示出来的组件都是一般组件，比如<Home/>。
// 路由组件一般都在项目src/views文件夹内，或者src/pages文件夹内。一般组件放在src/components文件夹内。
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import NewsDetail from '@/pages/NewsDetail.vue'     

// 从vue-router中引入创建路由器router的方法createRouter
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 创建路由器，并默认暴露
export default createRouter({
    // history: createWebHistory(), //路由的工作模式：histor、hash。注意在创建路由器的时候，vue3一定要制定路由器的工作模式，也就是history选项必须配置。
    history: createWebHashHistory(),
    routes: [{
        name: 'shouye',
        path: '/home',
        component: Home
    }, {
        name: 'xinwen',
        path: '/news',
        component: News,
        children: [ //childern:是一个数组，配置子集路由，数组中的对象和父级一样，配置path和comoonent,也可以命名，以及传参数。
            {
                name: 'xiang', // 命名子路由
                // path: 'detail/:id/:title/:content/:a',
                path: 'detail/:id/:title/:content?', //注意注意！params方式传递参数的时候，一定要先占位！！！占位规则是：【/:参数名】,参数名后面加【?】表示可传可不传，不加【?】表示必传，不传会报错。
                component: NewsDetail
            }
        ]
    }, {
        name: 'guanyu',
        path: '/about',
        component: About
    }]
})

/**
 * 路由的工作模式：history和hash。
 * 1、history模式：URL不带‘#’，更接近于标准的URL，更美观，项目上线时需后端配置配置路由，否则刷新时会报404.
 * 2、hash模式：URL带‘#’，不美观，#后是路径及参数，不需要后端配置配置，但SEO搜索比较差。
 * 一般对c的项目，都采用history模式，后台管理项目用hash模式。
 */
