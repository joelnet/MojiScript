/* eslint-disable */
const isThenable = require('../internal/isThenable')

const call = func => value =>
  isThenable (value)
    ? value.then (func)
    : func (value)

module.exports = call
