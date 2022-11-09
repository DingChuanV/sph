//search 模块的小仓库
import {reqGetSearchInfo} from "@/api";

const state = {
    searchlist: {}
};
const mutations = {
    SEARINFO(state, getSearchInfo) {
        state.searchlist = getSearchInfo;
    }
};
const actions = {
    // 获取search模块数据
    async getSearchInfo({commit}, params = {}) {
        let result = await reqGetSearchInfo(params)
        console.log(result.data)
        if (result.code == 200) {
            commit('SEARINFO', result.data)
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
