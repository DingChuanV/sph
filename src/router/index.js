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
        component: Home
    }, {
        path: "/search",
        component: Search
    }, {
        path: "/register",
        component: Register
    }, {
        path: "/login",
        component: Login
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
// 暴露路由的实例
export default router
