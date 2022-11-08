import {reqCategoryList, reqGetBannerList} from '@/api'

//home 模块的小仓库
const state = {
    // state 中数据默认初始值别瞎写，服务器返回的是对象，起始值就是对象
    categoryList: [],
    bannerList: []
};
const mutations = {
    CATEGORY(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNER(state, getBannerList) {
        console.log("修改仓库中的数据")
        state.bannerList = getBannerList
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发起请求，获取服务器的数据
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if (result != null) {
            commit("CATEGORY", result.data)
        }
    },
    // 发起请求mock的数据，获取banner数据
    async getBannerList({commit}) {
        console.log("获取mock中的数据")
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("BANNER", result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}
