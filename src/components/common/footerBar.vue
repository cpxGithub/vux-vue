<template>
  <div class="hello">
    <tabbar class="footer-bar1" v-model="active">
      <tabbar-item v-for="item in lists" :key="item.pathName" :link="item.pathName">
        <img slot="icon" :src="item.icon">
        <img slot="icon-active" :src="item.icon-active">
        <span slot="label">{{item.name}}</span>
      </tabbar-item>
    </tabbar>
    <div class="footer-bar">
      <router-link to="/" class="link">
        <div>
          <img class="icon" src="/static/assets/img/mall.svg" alt="">
          <div>首页</div>
        </div>
      </router-link>
      <router-link to="/" class="link">
        <div>
          <img class="icon" src="/static/assets/img/mall.svg" alt="">
          <div>首页</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  data () {
    return {
      active: 2,
      lists: [
        {name: '首页', icon: '/static/assets/img/mall.svg', iconActive: '/static/assets/img/mall-active.svg', pathName: '/mall/index'},
        {name: '发现', icon: '/static/assets/img/find.svg', iconActive: '/static/assets/img/find-active.svg', pathName: '/find/index'},
        {name: '订单', icon: '/static/assets/img/order.svg', iconActive: '/static/assets/img/order-active.svg', pathName: '/order/index'},
        {name: '我的', icon: '/static/assets/img/user.svg', iconActive: '/static/assets/img/user-active.svg', pathName: '/user/index'}
      ]
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.footer-bar {
  position: fixed;
  display: flex;
  width: 100%;
  height: 1rem;
  padding: 8px 0;
  font-size: 10px;
  color: #999;
  .link {
    text-align: center;
    // display: flex;
    // justify-content: center;
    width: 25%;
    .icon {
      width: .4rem;
      height: 0.4rem;
    }
  }
}
</style>
