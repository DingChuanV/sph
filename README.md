# 🖥sph

Vue电商项目：尚品汇

## ⌚️Vue前台项目技术栈

Vue、Webpack、Vuex、Vue-router、Axios、less

## 📺项目目录结构解析

node_modules 文件夹：项目依赖的文件夹

public文件夹：一般放置一些静态资源（图片），需要注意的是，放在public文件夹下的静态资源，webpack进行打包的时候，会原封不动的放在dist文件夹下。

src文件夹：

- assets文件夹：一般放置静态资源（一般放置多个组件公用的静态资源），需要注意的是，放置在assets文件夹里面的静态资源，在webpack打包的时候，webpack会把静态资源当作一个模块，打包在JS文件里。

- components文件夹：一般放置的是非路由组件（全局组件）。

- App.vue 唯一的根组件，Vue

- main.js 程序的入口文件，也是整个程序当中最先执行的文件

- babel.config.js 配置文件，babel（翻译官）将ES6转化成ES5，兼容

- package.json 项目的身份证，记录着项目的信息。（项目的运行）

- package.lock.json 缓存性的文件

## 📟项目路由分析

Vue-router,前端所谓的路由：K-V 键值对。
Key：URL（地址栏的路径）。Value:响应的路由组件。

项目是：上-中-下的一个结构。

路由组件：Home首页路由组件、Search路由组件、login登陆路由、register注册路由

非路由组件：

- Header（只是在首页、搜索页出现）
- Footer（在首页、搜索页有，但是在登陆、注册页面没有）

## 📲功能点

- 封装通用组件
- 登陆注册
- token
- 守卫
- 购物车
- 支付
- 性能优化
- 。。。。

## 1. 路由组件的搭建

vue-router。
在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register

- components 文件夹 ：经常放置的非路由组件（共用全局组件）
- pages|views 文件夹：经常放置路由组件

## 2. 配置路由

项目当中配置的路由一般放置在router文件夹中.

- 路由组件与非路由组件的区别
    - 路由组件一般放在views｜pages 文件夹下
    - 非路由组件一般都放置在components文件夹下
- 路由组件一般都需要在router文件夹下router.js中进行注册（使用的是组件的名字）
- 非路由组件都是已标签使用<Header></Header>
- 注册完路由,不管是路由组件还是非路由组件，身上都有$route｜$router属性

```javas
/**
    * $route 一般获取路由信息「路径、query、params等等」
    * $router 一般进行编程式导航路由跳转「push｜replace」
*/
```

## 3. 路由的跳转

需求：当我在home主页的时候，点击登陆或者注册的时候，就需要跳转到具体的页面。

路由的跳转方式：

1. 声明式导航router-link,可以进行路由的跳转。
2. 编程式导航。使用组件实例的$router.push()｜replace()，可以进行路由的跳转。

声明式导航能做的，编程式导航也能做。但是编程式导航除了可以进行路由的跳转，还可以做一些其他的业务逻辑。比如在登陆的时候，编程式导航可以对用户名和密码进行一些验证。

## 4.路由元信息的使用

Footer组件的显示与隐藏。显示或者隐藏组件：v-if|v-show
Footer组件：在Home、Search显示Footer组件
Footer组件：在登陆、注册时候隐藏

1. 可以根据组件的$route.path获取当前路由的信息，通过路由信息来判断Footer是显示还是隐藏。但是这种对路由组件过多，不太友好。
2. 可以利用@route的meta(路由的元信息，K-V)。

## 5. 路由传参

路由的跳转方式？

1. 声明式导航：<router-link to="""></router-link>
2. 编程式导航：使用组件的实例this.$router.push()|replace()

路由传参，参数有几种方式？

1. params参数：属于路径当中的一部分，需要注意的是，在配置路由的时候，需要占位。
2. query参数：不属于路径当中的一部分，类似于ajax中的queryString /home?k=v&kv=

需求：在我们home的搜索框，当我们输入"华为"的时候，点击搜索，首先会进行路由的跳转，并把检索的关键字，传递到后端请求接口。

方式：

```vue
      // 3.1 第一种方式：字符串形式
      //this.$router.push('/search/' + this.keyword + "?k=" + this.keyword.toUpperCase())

      // 3.2 第二种形式：模版字符串
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)

      // 3.3 第三种形式：对象(常用的)前提需要给路由起一个名字name
      this.$router.push({name: "search", params: {keyword: this.keyword}, query: {k: this.keyword.toUpperCase()}})
```

## 6.Home模块的拆分
具体的开发流程
1. 先把静态页面完成
2. 拆分出静态组件
3. 获取服务起数据展示
4. 动态业务

## 7.axios二次封装
XmlHttpRequest、fetch、JQuery、axios。

- 为什么需要二次封装axios？
 
  主要是为了封装
  - 请求响应拦截器
  - 响应响应拦截器

## 8.接口统一管理
项目很小：完全可以在组件的生命周期函数中发送请求
项目很大：axios.get('xxx')

## 8.跨域问题
什么是跨域：网络协议、域名、端口其中又一个不同就是跨域请求。
JSONP、CROS、代理。
 
## 9.nprogress进度条的使用
进度条的使用教程：https://madewith.cn/23
```shell
npm install --save nprogress
```
进度条的使用场景：主要在发起请求进度条显示，服务器响应结束之后进度条隐藏。
所以进度条就可以在axios的request.js中请求拦截器和响应拦截器中使用。

- start 代表进度条开始
- done 代表进度条消失

## 10.Vuex状态管理
### 10.1 Vuex是什么？
Vuex是一个专为vue.js应用程序开发的状态管理模式+库。它采用集中存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化，
Vuex也集成到Vue的官方调试工具devtools extension。

并不是所有的项目都需要使用Vuex，只有项目中的组件很多的时候，可以考虑使用Vuex，它就像一个数据仓库，将各个组件之间需要共享的数据存储起来。

每一个Vuex应用的核心就是store（仓库）。"store"基本上就是一个容器，它包含着你的应用中大部分的状态（state）。
Vuex和单纯的全局对象有以下两点不同：
- Vuex的状态存储是响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会相应地得到高效的更新。
- 你不能直接改变store中的状态。改变store中的状态唯一的途径就是显式地提交（commit）mutation。这样使得我们可以方便地跟踪每一个状态的变化。

### 10.2 Vuex基本使用
实现一个自增的计数器
### 10.3 Vuex实现模块化开发
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
为了解决以上的问题，Vuex允许我们将store分割成模块（module）。每个模块都有自己的state、mutations、actions、getters、甚至是嵌套子模块-从上之下进行同样方式切割。

如果项目过大，组件过多，接口也很多数据也很多，可以让Vuex实现模块式开发。

## 11.完成TypeNav三级联动展示数据业务





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
