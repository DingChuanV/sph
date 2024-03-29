import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入仓库
import store from './store'

// 三级联动组件--全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.config.productionTip = false

Vue.use(ElementUI);
//测试
// import {reqCategoryList} from '@/api'
// reqCategoryList()
// 引入MockServe.js--mock数据
import '@/mock/mockServe'
import "swiper/css/swiper.css";

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
    render: h => h(App),
    // 配置全局事件总线$bus
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')
