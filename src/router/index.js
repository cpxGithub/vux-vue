export default[
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('views/user/login')
  },
  {
    path: '/register',
    name: 'register',
    meta: { title: '注册' },
    component: () => import('views/user/register')
  },
  {
    path: '/mall/index',
    name: 'mallIndex',
    meta: { title: '首页' },
    component: () => import('views/mall/index')
  },
  {
    path: '/find/index',
    name: 'findIndex',
    meta: { title: '发现' },
    component: () => import('views/find/index')
  },
  {
    path: '/order/index',
    name: 'orderIndex',
    meta: { title: '订单' },
    component: () => import('views/order/index')
  },
  {
    path: '/user/index',
    name: 'userIndex',
    meta: { title: '个人中心' },
    component: () => import('views/user/index')
  },
  {
    path: '/user/modify',
    name: 'userModify',
    meta: { title: '个人信息修改' },
    component: () => import('views/user/modify')
  },
  {
    path: '*',
    alias: '/404',
    meta: { title: '404' },
    component: () => import('views/error')
  }
]
