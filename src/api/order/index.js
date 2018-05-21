import axios from '@/util/axios'

const fetchOrderList = (params) => axios('post', '/order/list', params)

export {
  fetchOrderList
}
