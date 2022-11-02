const { defineConfig } = require('@vue/cli-service')
// 对外暴露的对象
module.exports = defineConfig({
    //2.1 关闭eslint校验功能
    lintOnSave: false,
    transpileDependencies: true
})
