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

## 9.跨域问题

什么是跨域：网络协议、域名、端口其中又一个不同就是跨域请求。
JSONP、CROS、代理。

## 10.nprogress进度条的使用

进度条的使用教程：https://madewith.cn/23

```shell
npm install --save nprogress
```

进度条的使用场景：主要在发起请求进度条显示，服务器响应结束之后进度条隐藏。
所以进度条就可以在axios的request.js中请求拦截器和响应拦截器中使用。

- start 代表进度条开始
- done 代表进度条消失

## 11.Vuex状态管理

### 11.1 Vuex是什么？

Vuex是一个专为vue.js应用程序开发的状态管理模式+库。它采用集中存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化，
Vuex也集成到Vue的官方调试工具devtools extension。

并不是所有的项目都需要使用Vuex，只有项目中的组件很多的时候，可以考虑使用Vuex，它就像一个数据仓库，将各个组件之间需要共享的数据存储起来。

每一个Vuex应用的核心就是store（仓库）。"store"基本上就是一个容器，它包含着你的应用中大部分的状态（state）。
Vuex和单纯的全局对象有以下两点不同：

- Vuex的状态存储是响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会相应地得到高效的更新。
- 你不能直接改变store中的状态。改变store中的状态唯一的途径就是显式地提交（commit）mutation。这样使得我们可以方便地跟踪每一个状态的变化。

### 11.2 Vuex基本使用

实现一个自增的计数器

### 11.3 Vuex实现模块化开发

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
为了解决以上的问题，Vuex允许我们将store分割成模块（module）。每个模块都有自己的state、mutations、actions、getters、甚至是嵌套子模块-从上之下进行同样方式切割。

如果项目过大，组件过多，接口也很多数据也很多，可以让Vuex实现模块式开发。

## 12.完成TypeNav三级联动展示数据业务

### 12.1 完成一级分类动态添加背景元素

第一种解决方案：采用样式完成（可以）

```css
.item:hover {
    background: skyblue;
}
```
第二种解决方案：使用JS

在组件的身上初始化一个currentIndex，随着鼠标的在一级分类上移动，通过监听鼠标的事件获取一级分类的index，使currentIndex == index ,并使用class属性绑定，动态的改变一级分类的背景颜色。

### 12.2 通过JS控制二三级分类显示与隐藏


## 13. 演示卡顿现象
正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行（如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿）
节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量的触发。
防抖：前面所有的触发都被取消，最后一次执行在规定的时间之后会才会触发也就是说如果连续快速的触发，只会执行一次。

### 13.1 函数的防抖与节流
节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量的触发。
防抖：前面所有的触发都被取消，最后一次执行在规定的时间之后会才会触发也就是说如果连续快速的触发，只会执行一次。

使用lodash插件。
节流：用户操作很频繁，但是把频繁的操作变成少量的操作，给浏览器充裕的时间去解析、
防抖：用户操作很频繁，但是只执行一次。 
节流：闭包+定时器

### 13.2 完成三级联动的节流操作

## 14. 三级联动组件的路由跳转与传递参数
三级联动：用户点击的一级分类、二级分类、三级分类，当你点击的时候，会从Home模块跳转到Search模块，以及会把用户点击产品的id、name，在路由跳转的时候会进行传递。

路由跳转：
- 声明式导航：router-link
- 编程式导航：push｜replace

三级联动跳转：
- 如果使用声明式导航router-link，可以实现路由的跳转与传递参数。但是需要注意，出现三级联动的背景出现卡顿现象。
- 使用点击事件。如果a标签过多就会导致，很多次循环。
- **使用事件的委派｜事件委托。+编程式导航**


## 15.开发search模块中的TypeNav商品分类和过滤动画
使用v-show使组件元素显示或隐藏。
过滤动画：前提组件｜元素务必要有v-if和v-show指令才可以进行过度动画。

## 16.对typeNav商品分类列表的优化
由于在Home主页和Search主页引入了TypeNav组件，每次页面之前的跳转，typeNav都会去请求三级分类的数据。
为了减轻对服务器的压力，选择在app.vue根组件中的mounted函数，只执行一次请求，就会将数据放在home的仓库。

## 17.合并参数
### 17.1 合并param与query参数 

## 18.开发Home中的listContainer组件与Floor组件？
mock模拟数据

```shell
# 安装
npm install mockjs
```

```vue
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
```
使用步骤：
1. 在项目当中的src文件夹下创建mock目录
2. 第二步准备JSON数据
3. 把mock数据需要的图片放置到public文件夹下面「public文件夹在打包的时候，会把相应的资源原封不动的打包在dist文件夹下」
4. 通过mockServe.js模块实现虚拟数据
5. 把mockServe.js文件在入口文件中引入（main.js）

## 19.Banner实现轮播图
1. 引包（相应JS｜CSS）
2. 页面中的结构务必要有
3. new Swiper实例「轮播图添加动态效果」

watch侦听器：他是相应数据变化，这里的数据是data和computed中的数据。相当于监视数据，当数据发生变化时，会立即执行侦听器里边对应的函数。
侦听器watch是Vue提供的一种用来观察和响应Vue实例上的数据变化的属性。当被侦听的数据发生变化时，会触发对应的侦听函数。
```js
watch:{
        key:value,
        //key值就是要侦听的数据名字
        //value:5种类型（最常用的也就是函数类型）
} 
```
watch的属性名必须要与观察人的名字保持一致; 这样观察的值发生了变化才会触发。
虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。
当需要在数据变化时执行**异步**或开销较大的操作时，这个方式是最有用的。
所以我们可以使用watch 选项允许我们执行异步操作。并且我们的bannerlist 是一个有状态的数组。

nextTick:在下次DOM更新 循环结束之后 执行延迟回调。在 修改数据之后 立即使用这个方法,获取更新后的DOM。







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
