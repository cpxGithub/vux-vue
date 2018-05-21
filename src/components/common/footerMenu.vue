<template>
  <div class="footer-menu">
    <router-link class="link" v-for="item in lists" :key="item.pathName" :to="{name: item.routeName}">
      <div :class="{'active': $route.name === item.routeName}">
        <i :class="item.class"></i>
        <div class="title">{{item.name}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  data () {
    return {
      lists: [
        {name: '首页', class: 'icon icon-home', routeName: 'mallIndex'},
        {name: '发现', class: 'icon icon-find', routeName: 'findIndex'},
        {name: '订单', class: 'icon icon-order', routeName: 'orderIndex'},
        {name: '我的', class: 'icon icon-user', routeName: 'userIndex'}
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
.footer-menu {
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 1rem;
  background: #fff;
  padding-top: 2px;
  font-size: 10px;
  .link {
    text-align: center;
    width: 25%;
    .icon {
      display: inline-block;
      width: .4rem;
      height: 0.4rem;
    }
    .title {
      color: #8e8e93;
      font-size: 10px;
    }
    .icon-home {
      background: url('../../assets/img/index.png') no-repeat top/cover;
    }
    .icon-find {
      background: url('../../assets/img/find.png') no-repeat top/cover;
    }
    .icon-order {
      background: url('../../assets/img/order.png') no-repeat top/cover;
    }
    .icon-user {
      background: url('../../assets/img/user.png') no-repeat top/cover;
    }
    .active {
      .icon-home {
        background: url('../../assets/img/index-active.png') no-repeat top/cover;
      }
      .icon-find {
        background: url('../../assets/img/find-active.png') no-repeat top/cover;
      }
      .icon-order {
        background: url('../../assets/img/order-active.png') no-repeat top/cover;
      }
      .icon-user {
        background: url('../../assets/img/user-active.png') no-repeat top/cover;
      }
      .title {
        color: #0089dc;
      }
    }
  }
}
</style>
