"use-strict"

const https = require('https')
let url = "https://openfaas.com"

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
