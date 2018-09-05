const isFunction = require('../is/isFunction')

const maybeExec = maybeFunc => value =>
  isFunction(maybeFunc) ? maybeFunc(value) : maybeFunc

module.exports = maybeExec
