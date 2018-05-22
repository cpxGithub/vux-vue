let dataList = {
  'id': '@id',
  'name': '@cword(3, 8)',
  'logoUrl': '@dataImage("200x200")',
  'distance': '@natural(100, 5000)',
  'rating': '@integer(1, 5)',
  'orderNum': '@natural(0, 3000)',
  'orderTime': '@natural(10, 50)',
  'deliveryFee': '@integer(0, 1000)',
  'minimumAmount': '@natural(0, 3000)',
  'activities|2-30': [{
    'description': '新用户下单立减@natural(0, 30)元',
    'activityId': '@id()'
  }]
}

export {
  dataList
}
