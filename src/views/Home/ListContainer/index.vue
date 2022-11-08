<!--
  作者：wanglufei
-->
<template>
  <!--列表-->
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!--banner轮播-->
        <!--ref 被用来给元素或子组件注册引用信息-->
<!--        <div class="swiper-container" ref="mySwiper">-->
<!--          <div class="swiper-wrapper">-->
<!--            <div class="swiper-slide" v-for="(carousel,index) in bannerList" :key="carousel.id">-->
<!--              <img :src="carousel.imgUrl"/>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
<!--          <div class="swiper-pagination"></div>-->

<!--          &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
<!--          <div class="swiper-button-prev"></div>-->
<!--          <div class="swiper-button-next"></div>-->
<!--        </div>-->
        <carousel :list="bannerList"></carousel>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[公告]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[公告]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》'
import {mapState} from "vuex";

export default {
//import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
//这里存放数据
    return {};
  },
//计算属性 类似于data概念
  computed: {
    ...mapState({
      bannerList: (state) => {
        return state.home.bannerList
      }
    })
  },
  //监控data中的数据变化 侦听器
  watch: {
    // 监听bannerList数据的变化，因为这条数据发生过变化----由空数组变为有数据的数组
    // bannerList:function (newVal,oldVal){
    //
    // },

    // 对象值写法
    // bannerList: {
    //   immediate: true,
    //   // 现在咱们通过watch监听bannerlist属性值的变化
    //   // 如果执行handler方法，代表组件实例身上这个属性已经有了
    //   // nextTick:在下次DOM更新 循环结束之后 执行延迟回调。在 修改数据之后 立即使用这个方法,获取更新后的DOM。
    //   handler(newVal, oldVal) {
    //     // 当你执行nextTick回调的时候，已经保证组件的结构都有了
    //     this.$nextTick(() => {
    //       // document.querySelector(".swiper-container")
    //       let mySwiper = new Swiper(this.$refs.mySwiper, {
    //         loop: true,
    //         pagination: {
    //           el: ".swiper-pagination",
    //           clickable: true
    //         },
    //         navigation: {
    //           nextEl: ".swiper-button-next",
    //           prevEl: ".swiper-button-prev"
    //         },
    //       })
    //     })
    //   }
    // }
  },
//方法集合
  methods: {},
//声明周期 - 创建完成（可以访问当前this实例）
  created() {
  },
//声明周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log("我是mounted")
    //派发action，通过Vuex发起ajax请求，将数据存储在仓库中
    this.$store.dispatch('getBannerList')
    // 为什么swiper直接在mounted函数中书写不可以：因为组件的结构还没有完全完整。
    console.log("要初始化swiper")
    // new Swiper实例
    // setTimeout(() => {
    //   var mySwiper = new Swiper(document.querySelector(".swiper-container"), {
    //     loop: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev"
    //     },
    //   })
    // }, 1000)
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
.list-container {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 100%;
      padding: 5px;
      float: left;
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

      .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            background-image: url(./images/icons.png);
            width: 61px;
            height: 40px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }

          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }

      .ads {
        margin-top: 5px;

        img {
          opacity: 0.8;
          transition: all 400ms;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
