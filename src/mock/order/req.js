import { orderList } from './data'
var Mock = require('mockjs')
Mock.mock(/\/api\/order\/list*/, 'post', {
  'data|15': [orderList],
  'page': {
    currPage: 3,
    pageCount: 3,
    totalCount: 60
  }
})
