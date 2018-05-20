import { dataList } from './data'
var Mock = require('mockjs')
Mock.mock('/test/shopping/restaurants', {
  'data|15': [dataList]
})
