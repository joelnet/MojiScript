/* eslint-disable */
const K = require('../combinators/K')
const is = require('../type/is')

const isFunction = is (Function)

const ensureExecutable = x =>
  isFunction (x) ? x : K (x) // eslint-disable-line no-ternary

module.exports = ensureExecutable
