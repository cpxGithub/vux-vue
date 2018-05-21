<template>
  <section>
    <div class="order-container">
      <router-link class="order-list" to="/" v-for="item in lists" :key="item.orderId">
        <div class="order-top">
          <div>
            <img class="shop-logo" :src="item.logoUrl" alt="">
          </div>
          <div class="order-info">
            <div class="order-item">
              <div>
                <p class="shop-name">{{item.name}}</p>
                <p class="order-time">{{item.time}}</p>
              </div>
              <span class="order-status">{{item.orderStatus | statusFilter}}</span>
            </div>
            <div class="order-item">
              <span class="food-name">{{item.foodName}}</span>
              <span class="money">￥{{item.price | priceFilter}}</span>
            </div>
          </div>
        </div>
        <div class="order-bottom">
          <div class="btn btn-blue">再来一单</div>
          <div class="btn btn-y">评价得金币</div>
        </div>
      </router-link>
      <load-more :tip="loadFlag ? '正在加载' : '已经到底了'" :show-loading="loadFlag" style="margin-bottom: 0;"></load-more>
    </div>
    <footer-menu></footer-menu>
  </section>
</template>
<script>
import footerMenu from 'components/common/footerMenu'
import { LoadMore } from 'vux'
import { fetchOrderList } from 'api/order'
import { handleScroll } from '@/mixins'
export default {
  mixins: [handleScroll],
  data () {
    return {
      loadFlag: false,
      lists: []
    }
  },
  components: {
    footerMenu,
    LoadMore
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    this.getData()
  },
  methods: {
    getData () { // 获取数据
      this.loadFlag = true
      fetchOrderList({page: this.currPage, pageSize: 15}).then(res => {
        this.loadFlag = false
        this.isRequest = true
        this.page = res.page
        this.lists.push(...res.data)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.order-container {
  padding-bottom: 1.1rem;
}
.order-list {
  display: block;
  padding: 0.18rem 0.24rem;
  margin-top: 0.2rem;
  background: #fff;
  &:first-child {
    margin: 0;
  }
  .order-top {
    display: flex;
    .order-info {
      width: 100%;
      margin-left: 8px;
    }
  }
  .shop-logo {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
  }
  .order-item {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.18rem;
    color: #333;
    .shop-name {
      font-size: 0.32rem;
    }
    .order-status {
      font-size: 0.28rem;
    }
    .order-time {
      font-size: 10px;
      color: #999;
      margin-top: -2px;
    }
    .food-name {
      color: #666;
      font-size: 0.3rem;
    }
    .money {
      font-size: 0.3rem
    }
  }
  .order-bottom {
    display: flex;
    justify-content: flex-end;
  }
  .btn {
    display: inline-block;
    text-align: center;
    font-size: 0.28rem;
    padding: 3px 5px;
    border-radius: 2px;
    border: 1px solid #2395ff;
  }
  .btn-blue {
    color: #2395ff;
    margin-right: 10px;
  }
  .btn-y {
    color: #ff5339;
    border-color: #ff5339;
  }
}
</style>
