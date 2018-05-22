<template>
  <section class="find-container">
    <div>
      <img class="top" src="https://fuss10.elemecdn.com/4/5c/389dc2182920b6da9ba46948604d3gif.gif" alt="">
    </div>
    <div class="list">
      <div class="item">
        <div>
          <p class="title">百元红包</p>
          <p class="info">兴业银行联名卡</p>
        </div>
        <img class="item-logo" src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" alt="">
      </div>
      <div class="item">
        <div>
          <p class="title">金币商城</p>
          <p class="info">0元好物在这里</p>
        </div>
        <img class="item-logo" src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="">
      </div>
      <div class="item">
        <div>
          <p class="title title-b">推荐有奖</p>
          <p class="info">5元现金拿不停</p>
        </div>
        <img class="item-logo" src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt="">
      </div>
      <div class="item">
        <div>
          <p class="title title-b">必吃爆料</p>
          <p class="info">最夯外卖指南</p>
        </div>
        <img class="item-logo" src="https://fuss10.elemecdn.com/2/36/b784087aff96a97f4e5183d0d784fjpeg.jpeg?imageMogr/format/webp/" alt="">
      </div>
      <div class="see-more">查看更多</div>
    </div>
    <footer-menu></footer-menu>
  </section>
</template>
<script>
import footerMenu from 'components/common/footerMenu'
export default {
  data () {
    return {}
  },
  components: {
    footerMenu
  }
}
</script>
<style lang="less" scoped>
.find-container {
  .top {
    width: 100%;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    .item {
      width: 50%;
      height: 1.6rem;
      padding: 0 0.3rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 0.32rem;
        color: rgb(232, 143, 40);
      }
      .info {
        color: #999;
        font-size: 0.26rem;
      }
      .title-b {
        color: rgb(27, 169, 225);
      }
    }
    .item-logo {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
  }
  .see-more {
    width: 100%;
    color: #999;
    font-size: 0.28rem;
    text-align: center;
  }
}
</style>
