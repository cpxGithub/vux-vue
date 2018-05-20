import axios from '@/util/axios'

const fetchOrderList = (params) => axios('get', '/order-list', params)

export {
  fetchOrderList
}
