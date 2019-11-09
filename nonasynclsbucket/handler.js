"use strict"

const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false
  s3.listBuckets(null, callback)
  setTimeout(function () {
    console.log('Timeout complete.')
  }, 5000)
}