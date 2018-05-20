// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App'
import FastClick from 'fastclick'
import common from './util/common'
import './util/rem'
import { AlertPlugin, ToastPlugin, AjaxPlugin } from 'vux'
import './assets/styles/common.css'
if (process.env.NODE_ENV === 'development') {
  require('./mock/index')
}
require('es6-promise').polyfill()

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(AjaxPlugin)
// AjaxPlugin.$http.get('/a')

const router = new VueRouter({
  mode: 'history',
  routes
})

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
