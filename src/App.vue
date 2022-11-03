<template>
  <div>
    <!-- 3. 使用 -->
    <Header></Header>
    <!-- 3. router--在根组件显示-->
    <router-view/>
    <Footer></Footer>
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
