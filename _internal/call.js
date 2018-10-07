/* eslint-disable */
const isThenable = require('../_internal/isThenable')

const call = func => value =>
  isThenable (value)
    ? value.then (func)
    : func (value)

module.exports = call
