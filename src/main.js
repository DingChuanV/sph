import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入仓库
import store from './store'

// 三级联动组件--全局组件
import TypeNav from "@/views/Home/TypeNav";
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false
//测试
import {reqCategoryList} from '@/api'
reqCategoryList()

new Vue({
    // 2. router--注册路由
    // 注册路由信息：当这里书写router的时候，组件身上都有$route,$router属性
    /**
     * $route 一般获取路由信息「路径、query、params等等」
     * $router 一般进行编程式导航路由跳转「push｜replace」
     */
    router,
    // 注册仓库：组件实例的身上会多一个实例属性$store的属性
    store,
    render: h => h(App)
}).$mount('#app')
