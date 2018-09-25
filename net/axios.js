/* eslint-disable */
const curry2 = require('../internal/curry2')
const curry3 = require('../internal/curry3')
const axios = require('axios')

module.exports = {
  get: curry2 (axios.get),
  'delete': curry2 (axios.delete),
  head: curry2 (axios.head),
  options: curry2 (axios.options),
  post: curry3 (axios.post),
  put: curry3 (axios.put),
  patch: curry3 (axios.put)
}
