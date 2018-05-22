var app = require('express')();
var mall = require('./mall/req');
mall.init(app);

app.listen(3000, function() {
  console.log('HTTP Server is running on: http://localhost:%s', 3000)
})