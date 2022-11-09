// 当前这个模块：API进行统一管理
import requests from "@/api/request";
import ajaxMock from "@/api/ajaxMock";


// 三级联动的接口
// /product/getBaseCategoryList get
export function reqCategoryList() {
    // axios发请求返回结果Promise对象
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

//获取首页轮播图的接口
export const reqGetBannerList = () => ajaxMock.get("/banner")
//获取首页楼层列表
export const reqGetFloorList = () => ajaxMock.get("/floor")


// 获取搜索模块的数据 地址api/list 请求方式 Post 需要参数
// params 至少是一  个空对象
export const reqGetSearchInfo = (params) => {
    return requests({
        url: '/list',
        method: 'post',
        data: params
    })
}
