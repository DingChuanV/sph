# 🖥sph

Vue电商项目：尚品汇

## ⌚️Vue前台项目技术栈

Vue、Webpack、Vuex、Vue-router、Axios、less

## 📺项目目录结构解析

node_modules 文件夹：项目依赖的文件夹

public文件夹：一般放置一些静态资源（图片），需要注意的是，放在public文件夹下的静态资源，webpack进行打包的时候，会原封不动的放在dist文件夹下。

src文件夹：

- assets文件夹：一般放置静态资源（一般放置多个组件公用的静态资源），需要注意的是，放置在assets文件夹里面的静态资源，在webpack打包的时候，webpack会把静态资源当作一个模块，打包在JS文件里。

- components文件夹：一般放置的是非路由组件（全局组件）

- App.vue 唯一的根组件

- main.js 程序的入口文件，也是整个程序当中最先执行的文件

- babel.config.js 将ES6转化成ES5

- package.json 项目的身份证

- package.lock.json 缓存行性的文件

## 📟项目路由分析

Vue-router,前端所谓的路由：KV 键值对。
Key：URL（地址栏的路径）。Value:响应的路由组件。

项目是：上中下的一个结构。

路由组件：Home首页路由组件、Search路由组件、login登陆路由、register注册路由

非路由组件：

Header（只是在首页、搜索页出现）
Footer（在首页、搜索页有，但是在登陆页面没有）

## 📲功能点

- 封装通用组件
- 登陆注册
- token
- 守卫
- 购物车
- 支付
- 性能优化



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
