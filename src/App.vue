<template>
  <div>
    <!-- 3. 使用 -->
    <Header></Header>
    <!-- 3. router--在根组件显示-->
    <router-view/>
    <!--Footer组件在Home、Search的时候显示，在登陆和注册的时候隐藏-->
    <!--    <Footer v-show="$route.path=='/home' || $route.path=='/search'"></Footer>-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 1. 引入
import Header from './components/MyHeader'
import Footer from './components/MyFooter'

// 2. 注册
export default {
  name: '',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 通知Vuex发送请求，获取数据，存储于仓库
    // 派发一个action｜获取商品分类的三级列表的数据
    this.$store.dispatch('categoryList')
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
