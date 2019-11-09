"use strict"

const https = require('https')
let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"

module.exports =  function(event, context, callback) {
  https.get(url, (res) => {
    callback(null, res.statusCode)
  }).on('error', (e) => {
    callback(Error(e))
  })
}