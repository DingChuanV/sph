import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 引入小仓库
import home from "@/store/home";
import search from "@/store/search";


// 对外暴露Store类的一个实例
export default new Vuex.Store({
    //实现Vuex仓库模块式开发存储数据
    modules: {
        home,
        search
    }
})

// 对外暴露Store类的一个实例
// export default new Vuex.Store({
//     // 仓库存储数据的地方，也就是状态
//     state: {
//         // count: 1
//     },
//     // 计算属性，简化仓库数组，让组件获取仓库的数据更加方便
//     getters: {},
//     // 修改state的唯一手段
//     mutations: {
//         // ADD(state) {
//         //     state.count++;
//         // },
//         // DEL(state) {
//         //     state.count--;
//         // }
//     },
//     // 触发，可以书写自己的业务逻辑，也可以处理异步
//     actions: {
//         // <!--5.测试Vuex状态管理--实现对state的数据加一的操作-->
//         // 这里可以书写业务逻辑，但是不能修改state
//         // add({commit}) {
//         //     commit("ADD")
//         // },
//         // del({commit}) {
//         //     commit("DEL")
//         // }
//     },
//     //
//     modules: {}
// })
