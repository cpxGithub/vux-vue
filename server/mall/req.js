exports.init = function(app) {
  app.get('/api/shopping/restaurants', function (req, res) {
    res.send({name: 11})
  })
}