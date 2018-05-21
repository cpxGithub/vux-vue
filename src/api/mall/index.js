import axios from '@/util/axios'

const fetchShopList = (params) => axios('get', '/shopping/restaurants', params)

export {
  fetchShopList
}
