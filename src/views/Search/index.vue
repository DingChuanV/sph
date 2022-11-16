<!--
  作者：wanglufei
-->
<template>
  <div>
    <!--商品三级分类-->
    <TypeNav></TypeNav>
    <div class="main">
      <div class="py-container">
        <!--bread 面包屑-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x">手机</li>
            <li class="with-x">iphone<i>×</i></li>
            <li class="with-x">华为<i>×</i></li>
            <li class="with-x">OPPO<i>×</i></li>
          </ul>
        </div>

        <!--selector 选择器-->
        <SearchSelector></SearchSelector>

        <!--details 详情-->
        <div class="details clearfix">
          <!--导航-->
          <div class="sui-navbar">
            <div class="navbar-inner filter">

              <ul class="sui-nav">
                <li class="active">
                  <a href="#">综合</a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li>
                  <a href="#">价格⬆</a>
                </li>
                <li>
                  <a href="#">价格⬇</a>
                </li>
              </ul>
            </div>
          </div>
          <!--产品 -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="(good,index) in goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <!--                    <img :src="good.defaultImg"/>-->
                    <img src="./images/mobile02.png"/>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥ </em>
                      <i> {{ good.price }}.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html"
                       title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">
                      {{ good.title }}
                    </a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>


              <!--
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <a href="item.html" target="_blank"><img src="./images/mobile02.png"/></a>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <img src="./images/mobile02.png"/>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <img src="./images/mobile03.png"/>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <img src="./images/mobile04.png"/>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <img src="./images/mobile05.png"/>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <img src="./images/mobile06.png"/>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <img src="./images/mobile01.png"/>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <img src="./images/mobile02.png"/>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <img src="./images/mobile03.png"/>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="yui3-u-1-5">
                                            <div class="list-wrap">
                                              <div class="p-img">
                                                <img src="./images/mobile04.png"/>
                                              </div>
                                              <div class="price">
                                                <strong>
                                                  <em>¥ </em>
                                                  <i> 6088.00</i>
                                                </strong>
                                              </div>
                                              <div class="attr">
                                                <a target="_blank" href="item.html"
                                                   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone
                                                  6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                                              </div>
                                              <div class="commit">
                                                <i class="command">已有<span>2000</span>人评价</i>
                                              </div>
                                              <div class="operate">
                                                <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                                <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                              </div>
                                            </div>
                                          </li>
              -->

            </ul>
          </div>


          <!--分页器-->
          <div class="fr page">
            <div class="sui-pagination clearfix">
              <ul>
                <li class="prev disabled">
                  <a href="#">«上一页</a>
                </li>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li class="dotted"><span>...</span></li>
                <li class="next">
                  <a href="#">下一页»</a>
                </li>
              </ul>
              <div><span>共10页&nbsp;</span></div>
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
import SearchSelector from "@/views/Search/SearchSelector/SearchSelector";
import {mapGetters} from 'vuex'
import {mapState} from "vuex";

export default {
//import引入的组件需要注入到对象中才能使用
  name: "Search",
  components: {
    //子组件
    SearchSelector
  },
  props: {},
  data() {
//这里存放数据
    return {
      // 带给服务起的参数（响应式的数据）
      searchParams: {
        category1Id: " ",
        category2Id: " ",
        category3Id: " ",
        categoryName: " ",
        keyword: " ",
        order: " ",
        pageNo: 1,
        pageSize: 10,
        props: [],
        //品牌
        trademark: ""
      }
    };
  },
//计算属性 类似于data概念
  computed: {
    // ...mapState({
    //   searchlist:(state)=>{
    //     return state.search.searchlist
    //   }
    // }),
    ...mapGetters(['goodsList'])
  },
  //监控data中的数据变化
  // 监听组件实例身上的属性的属性值变化
  watch: {
    // 监听data下面的route路由信息的变化，再次发起请求，搜素数据
    $route(newValue, oldValue) {
      // 整理好数据
      Object.assign(this.searchParams, this.$route.query, this.$route.params)
      // 再次发发起请求
      this.getData()
      console.log("watch:", this.searchParams)
      // 每一次请求完毕，应该把响应的1、2、3级分类d的id置为空，让他接受下一次的请求
      this.searchParams.category1Id = ''
      this.searchParams.category2Id = ''
      this.searchParams.category3Id = ''
    }
  },
  //方法集合
  methods: {
    getData() {
      this.$store.dispatch('getSearchInfo', this.searchParams)
    }
  },
  //声明周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  //声明周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getData()
  },
  beforeCreate() {
  },
  //生命周期 - 创建之前
  beforeMount() {
    // 复杂的写法
    this.searchParams.category1Id = this.$route.query.category1Id
    // 。。。。
    // Object.assign ES6新增的语法，合并对象
    // 在发起请求之前，把接口需要传递的参数，进行整理（在给服务器发请求之前，把参数整理好，服务器就会返回查询的数据 ）
    Object.assign(this.searchParams, this.$route.query, this.$route.params)
    console.log('在发起请求之前', this.searchParams)
  },
  //生命周期 - 挂载之前
  beforeUpdate() {
  },
  //生命周期 - 更新之前
  updated() {
  },
  //生命周期 - 更新之后
  beforeDestroy() {
  },
  //生命周期 - 销毁之前
  destroyed() {
  },
  //生命周期 - 销毁完成
  activated() {
  }
  //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang="less">
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>
