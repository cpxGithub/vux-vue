// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App'
import FastClick from 'fastclick'
import common from './util/common'
import * as filters from './filters'
import './util/rem'
import { ToastPlugin } from 'vux'
import './assets/styles/common.css'
if (process.env.NODE_ENV === 'development') {
  require('./mock/index')
}
// IE浏览器兼容promise
require('es6-promise').polyfill()

Vue.use(VueRouter)
Vue.use(ToastPlugin)

// 过滤器注册
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const router = new VueRouter({
  mode: 'history',
  routes
})

// 设置title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    common.setTitle(to.meta.title)
  }
  next()
})

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
