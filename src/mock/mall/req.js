import { dataList } from './data'
var Mock = require('mockjs')
Mock.mock(/\/api\/shopping\/restaurants*/, {
  'data|15': [dataList],
  'page': {
    currPage: 3,
    pageCount: 3,
    totalCount: 60
  }
})
