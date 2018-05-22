<template>
  <section>
    <div class="mall-content">
      <div class="address">
        <i class="icon"></i>
        <span class="info">软件产业基地</span>
      </div>
      <div>
        <swiper :list="list" dots-position="center" auto loop height="2rem"></swiper>
      </div>
      <div class="kind-box">
        <router-link to="/" v-for="(item, idx) in kindLists" :key="idx" class="kind-item">
          <div>
            <img class="icon" :src="item.imgUrl" alt="">
            <div class="title">{{item.title}}</div>
          </div>
        </router-link>
      </div>
      <div class="shop-list">
        <divider class="top-title">商家推荐</divider>
        <div class="list">
          <div class="shop-info" v-for="item in shopLists" :key="item.id">
            <div class="shop-info-left">
              <img class="shop-logo" :src="item.logoUrl" alt="">
            </div>
            <div class="shop-info-right">
              <div class="shop-name">{{item.name}}</div>
              <div class="sale-num margin-top5">
                <rater :value="item.rating" active-color="#ffc700" :font-size="14"></rater>
                <span>{{item.rating}}</span>
                <span>月售{{item.orderNum}}单</span>
              </div>
              <div class="shop-dis margin-top5">
                <div>
                  <span class="left">¥{{item.minimumAmount | priceFilter}}起送</span>
                  <span>配送费¥{{item.deliveryFee | priceFilter}}</span>
                </div>
                <div class="color999">
                  <span class="left">{{item.distance | disFilter}}</span>
                  <span>{{item.orderTime}}分钟</span>
                </div>
              </div>
              <div class="discout-info margin-top5">
                <div class="shop-dis" v-for="(child, index) in item.activities" :key="index">
                  <span v-if="index < 2 || item.showAll"><span :class="[index ? 'other-bg' : 'first-bg', 'first-dis']">{{index ? '减' : '首'}}</span>{{child.description}}</span>
                  <span v-if="index === 0" class="color999" @click="showActive(item)">{{item.activities.length}}个活动<i class="arrow-dow"></i></span>
                </div>
              </div>
            </div>
          </div>
          <load-more :tip="loadFlag ? '正在加载' : '已经到底了'" :show-loading="loadFlag" style="margin-bottom: 0;"></load-more>
        </div>
      </div>
    </div>
    <footer-menu></footer-menu>
  </section>
</template>
<script>
import footerMenu from 'components/common/footerMenu'
import { Swiper, Divider, Rater, LoadMore } from 'vux'
import { handleScroll } from '@/mixins'
import { fetchShopList } from 'api/mall/index'
export default {
  mixins: [handleScroll],
  data () {
    return {
      kindLists: [ // 种类
        {
          imgUrl: 'http://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '美食'
        },
        {
          imgUrl: 'http://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '晚餐'
        },
        {
          imgUrl: 'http://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '超市便利'
        },
        {
          imgUrl: 'http://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '果蔬生鲜'
        },
        {
          imgUrl: 'http://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '医药健康'
        },
        {
          imgUrl: 'http://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '大牌5折'
        },
        {
          imgUrl: 'http://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '浪漫鲜花'
        },
        {
          imgUrl: 'http://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '麻辣烫'
        },
        {
          imgUrl: 'http://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '地方菜系'
        },
        {
          imgUrl: 'http://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
          title: '披萨意面'
        }
      ],
      loadFlag: false,
      list: [{ // 轮播图
        url: 'javascript:',
        img: '//fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/'
      }, {
        url: 'javascript:',
        img: 'http://fuss10.elemecdn.com/5/78/ea6efe857599f67bcec5d671f56b2jpeg.jpeg?imageMogr/format/webp/'
      }],
      shopLists: [] // 商家列表1111
    }
  },
  components: {
    footerMenu,
    Swiper,
    Divider,
    Rater,
    LoadMore
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    this.getData()
  },
  methods: {
    showActive (obj) { // 显示所有活动
      this.$set(obj, 'showAll', !obj.showAll)
    },
    getData () { // 获取数据
      this.loadFlag = true
      fetchShopList({page: this.currPage, pageSize: 15}).then(res => {
        this.loadFlag = false
        this.isRequest = true
        this.page = res.page
        this.shopLists.push(...res.data)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.mall-content {
  padding-bottom: 1.1rem;
  .color999 {
    color: #999;
  }
  .margin-top5 {
    margin-top: 5px;
  }
  .arrow-dow {
    position: relative;
    left: 3px;
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    background: url('../../assets/img/arrow-down.png') no-repeat top/cover;
  }
  .address {
    display: flex;
    align-items: center;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    color: #fff;
    padding: 12px 0.2rem;
    .icon {
      display: inline-block;
      width: 0.36rem;
      height: 0.42rem;
      background: url('../../assets/img/local.png') no-repeat top/cover;
      margin-right: 8px;
    }
    .info {
      font-weight: bold;
    }
  }
  .swiper-dot {
    color: red;
  }
  .kind-box {
    display: flex;
    height: 3rem;
    flex-wrap: wrap;
    align-content: stretch;
    background: #fff;
    padding-top: 6px;
    .kind-item {
      width: 20%;
      text-align: center;
      .icon {
        width: 0.8rem;
        height: 0.8rem;
      }
      .title {
        color: #666;
        font-size: .2rem;
      }
    }
  }
  .top-title {
    width: 120px;
    margin: 0 auto;
    font-size: 14px;
  }
  .shop-list {
    background: #fff;
    padding: 0 0.26rem;
    .shop-info {
      display: flex;
      padding: 5px 0;
      .shop-logo {
        display: block;
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 1px;
      }
      .shop-info-right {
        width: 100%;
        font-size: 0.18rem;
        color: #666;
        margin-left: 10px;
        .shop-name {
          color: #333;
          font-weight: bold;
          font-size: .30rem;
        }
        .shop-dis {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .left::after {
          display: inline-block;
          height: 0.18rem;
          line-height: 0.18rem;
          margin: 0 3px 0 5px;
          content: "";
          border-left: 1px solid #ddd;
        }
        .first-dis {
          display: inline-block;
          width: 15px;
          height: 15px;
          border-radius: 3px;
          text-align: center;
          line-height: 15px;
          color: #fff;
          margin-right: 5px;
          margin-bottom: 5px;
        }
        .first-bg {
          background: rgb(112, 188, 70);
        }
        .other-bg {
          background: rgb(240, 115, 115);
        }
      }
    }
  }
}
</style>
