<!--
  作者：wanglufei
-->
<template>
  <!--楼层-->
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{ list.name }}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix" v-for="(nav,index) in list.navList" :key="nav.text">
            <li class="active">
              <a href="#tab1" data-toggle="tab">{{ nav.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(key,index) in list.keywords" :key="index">{{ key }}</li>
              </ul>
              <img :src="list.imgUrl"/>
            </div>
            <div class="floorBanner">
              <!--轮播图-->
              <carousel :list="list.carouselList"></carousel>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[0]"/>
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[1]"/>
              </div>
            </div>
            <div class="split center">
              <img :src="list.bigImg"/>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[2]"/>
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[3]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》'


export default {
//import引入的组件需要注入到对象中才能使用
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
//     list: {
//       // 立即监听，不管你数据有没有变化，立即监听一次
//       immediate: true,
//       handler() {
//         // 只能监听到数据变化，但是v-for动态渲染结构还是没有办法确定，因此还是需要nextTick
//         this.$nextTick(()=>{
//           let mySwiper = new Swiper(this.$refs.cur, {
//             loop: true,
//             pagination: {
//               el: ".swiper-pagination",
//               clickable: true
//             },
//             navigation: {
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev"
//             },
//           })
//         })
//       }
//     }
  },
//方法集合
  methods: {},
//声明周期 - 创建完成（可以访问当前this实例）
  created() {
  },
//声明周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // let mySwiper = new Swiper(this.$refs.cur, {
    //   loop: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   },
    // })
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
}
</script>
<style scoped lang="less">
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>
