// 当前这个模块：API进行统一管理
import requests from "@/api/request";

// 三级联动的接口
// /product/getBaseCategoryList get
export function reqCategoryList() {
    // axios发请求返回结果Promise对象
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}
