import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Search from "@/views/Search";
import Register from "@/views/Register";
import Login from "@/views/Login";

Vue.use(VueRouter)


// 1. router--配置路由的地方 同时需要在main.js入口文件需要注册
const routes = [
    {
        path: "/home",
        component: Home,
        meta: {show: true}
    }, {
        // 绑定关键字 指定需要传递传递params参数的 :keyword已经占位了
        // 指定params参数可传可不传，只需要加一个 ？。
        path: "/search/:keyword?",
        component: Search,
        meta: {show: true},
        name: "search",
        //路由组件能不能传递props数据(props是父组件向子组件传递参数的)
        // 第一种写法 布尔值写法
        // props: true
        // 第二种写法：对象,额外给路由组件传递一些props
        // props: {
        //     a: 1,
        //     b: 2
        // }
        // 第三种写法：函数式，可以把params参数、query参数，通过props传递给路由组件
        props: ($route) => {
            return {keyword: $route.params.keyword, k: $route.query.k}
        }
    }, {
        path: "/register",
        component: Register,
        meta: {show: false}
    }, {
        path: "/login",
        component: Login,
        meta: {show: false}
    },
    // 重定向，在项目跑起来的时候，访问 / ，立马让他定向到首页
    {
        path: "/",
        redirect: "/home"
    }

]

const router = new VueRouter({
    routes
})

// 5.1 编程式路由跳转到当前路由（参数不变），多次执行会抛出nNavigationDuplicated错误？
// 防止连续点击多次路由报错。先把VueRouter原型对象的push方法保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push｜Replace
// 第一个参数：告诉原来的push方法，你往哪里跳转（传递那些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // call|apply的区别
        // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
}

VueRouter.prototype.replace=function (location,resolve,reject){
    if (resolve && reject) {
        // call|apply的区别
        // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {});
    }
}


// 暴露路由的实例
export default router
