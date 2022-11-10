//search 模块的小仓库
import {reqGetSearchInfo} from "@/api";

const state = {
    // 仓库初始状态
    searchlist: {}
};
const mutations = {
    SEARCHLIST(state, getSearchInfo) {
        state.searchlist = getSearchInfo
    }
};
const actions = {
    // 获取search模块数据
    async getSearchInfo({commit}, params = {}) {
        let result = await reqGetSearchInfo(params)
        console.log(result)
        if (result.code == 200) {
            commit('SEARCHLIST', result.data)
        }
    }
};
// 计算属性
const getters = {
    // 在项目中getters主要的作用，简化操作仓库中的数据。
    // 当前形参state并不是大仓库中的state
    goodsList(state) {
        return state.searchlist.goodsList || []
    },
    trademarkList(state) {
        return state.searchlist.trademarkList || []
    },
    attrsList(state) {
        return state.searchlist.attrsList || []
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
