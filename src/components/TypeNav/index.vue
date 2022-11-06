<!--
  作者：wanglufei
-->
<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!--事件的委派｜事件委托-->
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <!--事件的委派，只循环一次-->
          <!--利用事件的委派+编程式导航实现路由的跳转和路由之间传递参数-->
          <div class="all-sort-list2" @click="goSearch">
            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId"
                 :class="{cur:currentIndex==index}">
              <h3 @mouseenter="changeIndex(index)">
                <!--:data-categoryName="c1.categoryName" 自定义属性-->
                <!--:data-category1Id="c1.categoryId" 自定义属性，使用事件委托，解构出三级联动的ID-->
                <span :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</span>
                <!--<router-link to="/search">{{ c1.categoryName }}</router-link>-->
              </h3>
              <!--二三级分类-->
              <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <span :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{
                          c2.categoryName
                        }}</span>
                      <!--                      <router-link to="/search">{{ c2.categoryName }}</router-link>-->
                    </dt>
                    <dd>
                      <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                        <span :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{
                            c3.categoryName
                          }}</span>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》'
import {mapState} from 'vuex'
import throttle from 'lodash/throttle'

export default {
  name: "TypeNav",
//import引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {
      // 存储用户鼠标移上哪一个分类
      currentIndex: -1
    };
  },
  //计算属性 类似于data概念
  computed: {
    ...mapState({
      // 右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      // 注入一个参数，state，即为大仓库的数据对象
      // categoryList: state => state.home.categoryList
      categoryList: (state) => {
        return state.home.categoryList;
      }
    })
  },
//监控data中的数据变化
  watch: {},
//方法集合
  methods: {
    // 鼠标进入一级分类修改响应式数据currentIndex属性
    // changeIndex(index) {
    //   // index
    //   this.currentIndex = index
    // },
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    // 鼠标离开一级分类修改响应式数据currentIndex属性
    leaveIndex() {
      this.currentIndex = -1;
    },
    goSearch(event) {
      // 路由跳转最好的解决方案就是：编程式导航+事件委派
      // 如果利用事件委托，就会存在在委托的对象不清晰和如何获取路由的参数
      // 1.给子节点中的a标签，自定义属性
      // 2.使用event事件对象，可以获取到当前的点击对象的标签，只要有我们的自定义属性（小写）就知道
      // 3.节点有一个属性dataset，可以获取到参数
      // 解构对象
      let {categoryname, category1id, category2id, category3id} = event.target.dataset
      // 如果标签（解构出来的对象）存在categoryname，就说明它是a标签
      if (categoryname) {
        let location = {name: "search"}
        let query = {categoryName: categoryname}
        // 4.你怎么知道是一级分类还是二级分类的问题
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else if (category3id) {
          query.category3Id = category3id
        }
        // 整理参数
        location.query = query
        // 路由跳转
        this.$router.push(location)
      }
    }
  },
  //声明周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  //声明周期 - 挂载完成（可以访问DOM元素）
  //mounted挂载完成，也就是模版中的html渲染到了html页面中，此时一般可以做一些ajax操作，mounted只会执行一次。
  // 可以向服务起发起请求
  mounted() {
    // 通知Vuex发送请求，获取数据，存储于仓库
    this.$store.dispatch('categoryList')
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
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }

        //.item:hover {
        //  background: skyblue;
        //}

        .cur {
          background: skyblue;
        }
      }
    }
  }
}
</style>
