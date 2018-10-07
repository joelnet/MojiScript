/* eslint-disable */
const is = require('../type/is')

const isFunction = is (Function)

const maybeExec = maybeFunc => value =>
  isFunction (maybeFunc) ? maybeFunc (value) : maybeFunc // eslint-disable-line no-ternary

module.exports = maybeExec
