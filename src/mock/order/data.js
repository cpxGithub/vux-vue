let orderList = {
  'orderId': '@id',
  'name': '@cword(3, 8)',
  'logoUrl': '@dataImage("200x200")',
  'orderStatus': '@integer(1, 3)',
  'time': '@date("yyyy-MM-dd HH:mm:ss")',
  'foodName': '@cword(3, 8)',
  'price': '@integer(1, 100)'
}

export {
  orderList
}
