const {defineConfig} = require('@vue/cli-service')
// 对外暴露的对象
module.exports = defineConfig({
    //2.1 关闭eslint校验功能
    lintOnSave: false,
    transpileDependencies: true,
    //配置代理服务器
    devServer: {
        proxy: {
            "/api": {
                target: "http://gmall-h5-api.atguigu.cn"
            }
        }
    }
})
