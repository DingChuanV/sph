<!--
  功能：功能描述
  作者：uin
  邮箱：2686221966@qq.com
  时间：2022年11月02日 21:43:32
  版本：v1.0
-->
<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!--<a href="###">登录</a>-->
            <!--声明式导航：务必要有to属性-->
            <router-link to="/login">登陆</router-link>
            <!--<a href="###" class="register">免费注册</a>-->
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!--当你点击这个logo的时候，也是跳转到首页-->
        <!--        <a class="logo" title="尚品汇" href="###" target="_blank">-->
        <!--          <img src="./images/logo.png" alt=""/>-->
        <!--        </a>-->
        <!--声明式导航跳转-->
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt=""/>
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <!--1. 路由传递参数--当我们需要获取input中收集的参数，可以使用数据的双向绑定-->
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword"/>
          <!--编程式导航跳转到search页面-->
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      // <!--2. 路由传递参数--当我们需要获取input中收集的参数，可以使用数据的双向绑定-->
      keyword: ""
    };
  },
  //计算属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 搜索按钮的回调函数，路由到search页面
    goSearch() {
      /**
       * 3. 路由传递参数--当我们在Home页的时候，收集好输入信息，使用路由的params传递参数将参数传递给search路由组件
       */
      // 3.1 第一种方式：字符串形式
      //this.$router.push('/search/' + this.keyword + "?k=" + this.keyword.toUpperCase())

      // 3.2 第二种形式：模版字符串
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)

      // 3.3 第三种形式：对象(常用的)前提需要给路由起一个名字name
      this.$router.push({name: "search", params: {keyword: this.keyword},query: {k: this.keyword.toUpperCase()}}, () => {}, () => {})

      // 4.1 如何指定params参数可传可不传,如何解决？
      // this.$router.push({name: "search", query: {k: this.keyword.toUpperCase()}})

      // 4.2 params参数也可以传递也可以不传递，但是如果传递是空串，如何解决?
      // this.$router.push({name: "search", params: {keyword: "" || undefined}, query: {k: this.keyword.toUpperCase()}})

      // 4.3 路由组件能不能传递props数据(props是父组件向子组件传递参数的)
      // 详见router->index.js

      // 5.1 编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated错误？
      // 详见router->index.js
      // 声明式导航没有这类的问题，因为vue-router底层已经封装好了。是因为在vue-router在3.5.3,最新的vue-router引入了promise
      // 通过给push方法传递相应的成功、失败的回调函数，可以捕捉异常，可以解决。
      // this.$router.push({name: "search", params: {keyword: this.keyword},query: {k: this.keyword.toUpperCase()}}, () => {}, () => {})
      // this：当前组件实例对象
      // $router：

    }
  },
  //声明周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  //声明周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  beforeCreate() {
  }, //生命周期 - 创建之前
  beforeMount() {
  }, //生命周期 - 挂载之前
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {
  }, //生命周期 - 更新之后
  beforeDestroy() {
  }, //生命周期 - 销毁之前
  destroyed() {
  }, //生命周期 - 销毁完成
  activated() {
  } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }

      }

    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
