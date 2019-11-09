"use-strict"

const https = require('https')
let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"

module.exports = async (event, context) => {
  const promise = new Promise(function(resolve, reject) {
    https.get(url, (res) => {
        resolve(res.statusCode)
      }).on('error', (e) => {
        reject(Error(e))
      })
    })
  return promise
}
