<!--
  作者：wanglufei
-->
<template>
  <div>
    <!--三级联动--已经注册为全局组件，不需要引入-->
    <TypeNav></TypeNav>
    <list-container></list-container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!--:list="floor" 父组件给子组件传输数据-->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>

    <!--1.测试Vuex状态管理-->
    <!--    <button @click="add">+1</button>-->
    <!--    <span>state仓库中的数据{{count}}</span>-->
    <!--    <button @click="del">-1</button>-->

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》'
import listContainer from "@/views/Home/ListContainer";
import Recommend from "@/views/Home/Recommend";
import Rank from "@/views/Home/Rank";
import Like from "@/views/Home/Like";
import Floor from "@/views/Home/Floor";
import Brand from "@/views/Home/Brand";
// <!--2.测试Vuex状态管理-->
// import {mapState} from 'vuex';
import {mapState} from "vuex";


export default {
//import引入的组件需要注入到对象中才能使用
  components: {
    //注册主键
    listContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  props: {},
  data() {
    //这里存放数据
    return {};
  },
//计算属性 类似于data概念
  computed: {
    // <!--3.测试Vuex状态管理-->
    // ...mapState(['count'])
    ...mapState({
      floorList: (state) => {
        return state.home.floorList
      }
    })
  },
//监控data中的数据变化
  watch: {},
//方法集合
  methods: {
    // <!--4.测试Vuex状态管理--实现对state的数据加一的操作-->
    // add(){
    //   this.$store.dispatch('add')
    // },
    //
    // del(){
    //   this.$store.dispatch("del")
    // }
  },
//声明周期 - 创建完成（可以访问当前this实例）
  created() {
  },
//声明周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("getFloorList")
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
<style scoped>
</style>
