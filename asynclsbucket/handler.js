"use strict"

const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports = async function(event, context) {
  return s3.listBuckets().promise()
}