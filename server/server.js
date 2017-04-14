var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
var dataPath = path.join(__dirname, '../data/drinks.json')

app.get('/drinks', function (req, res) {
  fs.readFile(dataPath, 'utf8', function (err, data) {
    if (err) {
      reject (err)
    } else {
      var drinks = JSON.parse(data).drinks
      res.json('home', {drinks: drinks})
    }
  })
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
