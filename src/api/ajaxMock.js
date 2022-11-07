// 对于axios的二次封装，主要是为了重写请求和响应拦截器
import axios from "axios";
// 引入进度条
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'


// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置一下
const requests = axios.create({
    // 配置对象
    // 基础路径，发请求的时，路径当中会出现api
    baseURL: "/mock",
    // 超时时间5s
    timeout: 10000
})
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    // config 配置对象，对象里面又一个属性很重要，header请求头
    // 1. 进度条的配置--启动
    nprogress.start();
    return config;
})

// 响应拦截器，
requests.interceptors.response.use((res) => {
    // 成功的回调函数：服务器响应回来的数据以后，响应拦截器可以拦截，同时可以作一些事情
    // 2.进度条的配置--结束
    nprogress.done();
    return res.data;
}, (error) => {
    // 响应失败的回调信息
    return Promise.reject(error)
})

//对外暴露
export default requests;
