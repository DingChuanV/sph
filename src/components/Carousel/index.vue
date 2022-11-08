<!--
  作者：wanglufei
-->
<template>
  <div class="swiper-container" ref="cur" id="floor2Swiper">
    <div class="swiper-wrapper">
      <!--carouselList-->
      <div class="swiper-slide" v-for="(carouse,index) in list" :key="carouse.id">
        <img :src="carouse.imgUrl"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》'
import Swiper from "swiper";

export default {
//import引入的组件需要注入到对象中才能使用
  name: "Carousel",
  components: {},
  props: ['list'],
  data() {
//这里存放数据
    return {};
  },
//计算属性 类似于data概念
  computed: {},
//监控data中的数据变化
  watch: {
    list: {
      // 立即监听，不管你数据有没有变化，立即监听一次
      immediate: true,
      handler() {
        // 只能监听到数据变化，但是v-for动态渲染结构还是没有办法确定，因此还是需要nextTick
        this.$nextTick(() => {
          let mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
          })
        })
      }
    }
  },
//方法集合
  methods: {},
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
<style scoped>
</style>
