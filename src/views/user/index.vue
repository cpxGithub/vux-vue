<template>
  <section>
    <div class="user-container">
      <div class="user-header">
        <div class="user-info" @click="userClick">
          <div class="user-logo">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3652839969,2526397191&fm=200&gp=0.jpg" alt="">
            <div>
              <p class="user-name">做个有文化的吃货</p>
              <p class="user-phone">1803623652</p>
            </div>
          </div>
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="account">
        <div class="item vux-1px-r">
          <div>
            <p class="item-top">{{55 | priceFilter}}<span class="small">元</span></p>
            <p class="item-bottom">钱包</p>
          </div>
        </div>
        <div class="item vux-1px-r">
          <div>
            <p class="item-top red-b">66<span class="small">个</span></p>
            <p class="item-bottom">红包</p>
          </div>
        </div>
        <div class="item">
          <div>
            <p class="item-top gold">551<span class="small">个</span></p>
            <p class="item-bottom">金币</p>
          </div>
        </div>
      </div>
      <div class="user-list">
        <div class="list-item vux-1px-t vux-1px-b">
          <div>
            <i class="icon-r"></i>
            <span>我的地址</span>
          </div>
          <span class="arrow-icon"></span>
        </div>
        <div class="list-item vux-1px-t vux-1px-b">
          <div>
            <i class="icon-r shop-icon"></i>
            <span>金币商城</span>
          </div>
          <span class="arrow-icon"></span>
        </div>
        <div class="list-item vux-1px-t vux-1px-b">
          <div>
            <i class="icon-r money-icon"></i>
            <span>分享拿5元现金</span>
          </div>
          <span class="arrow-icon"></span>
        </div>
      </div>
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
  },
  methods: {
    userClick () {
      this.$router.push({name: 'userModify'})
    }
  }
}
</script>
<style lang="less" scoped>
.user-header {
  display: flex;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  padding: .666667rem .4rem;
  color: #fff;
  align-items: center;
  .user-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .user-logo {
      display: flex;
    }
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
    .user-name {
      font-size: 0.36rem;
      font-weight: bold;
    }
    .user-phone {
      font-size: 0.2rem;
    }
  }
  .arrow-right {
    display: block;
    width: 0.3rem;
    height: 0.4rem;
    background: url("../../assets/img/arrow-right.png") no-repeat top/cover;
  }
}
.user-container {
  .account {
    height: 2rem;
    background: #fff;
    display: flex;
    flex-wrap: nowrap;
    .item {
      width: 33.33%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .item-top {
        font-size: 0.46rem;
        font-weight: bold;
        color: rgb(0, 152, 251);
      }
      .red-b {
        color: rgb(255, 95, 62);
      }
      .gold {
        color: rgb(106, 194, 11);
      }
      .small {
        font-weight: normal;
        font-size: 0.26rem;
      }
      .item-bottom {
        color: #666;
        font-size: 0.2rem;
        text-align: center;
        font-weight: bold;
      }
    }
    .vux-1px-r:after {
      border-right: 1px solid #ccc;
      color: #ccc;
    }
  }
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 0.2rem 0.3rem;
    margin-top: 0.26rem;
    color: #555;
    .icon-r {
      position: relative;
      top: 3px;
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;
      background: url('../../assets/img/addr-icon.png') no-repeat top/cover;
    }
    .arrow-icon {
      display: inline-block;
      width: 0.3rem;
      height: 0.36rem;
      background: url('../../assets/img/arrow-right1.png') no-repeat top/cover;
    }
    .shop-icon {
      background: url('../../assets/img/shop.png') no-repeat top/cover;
    }
    .money-icon {
      background: url('../../assets/img/libao.png') no-repeat top/cover;
    }
  }
}
</style>
