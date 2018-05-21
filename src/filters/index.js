/**
 * 价格过滤器，/100 && 保留两位小数
 */
export let priceFilter = (price) => {
  return (price / 100)
}

export let disFilter = (value) => {
  let str = value
  if (value >= 1000) {
    str = (str / 1000).toFixed(2)
    return `${str}km`
  } else {
    return `${str}m`
  }
}

export let statusFilter = (status) => {
  let str = ''
  switch (status) {
    case 1:
      str = '订单已完成'
      break
    case 2:
      str = '配送中'
      break
    case 3:
      str = '未付账'
      break
  }
  return str
}
