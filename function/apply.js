/* eslint-disable */
const isThenable = require('../internal/isThenable')

const apply = func => value =>
  isThenable (value)
    ? value.then (func)
    : func (value)

module.exports = apply
