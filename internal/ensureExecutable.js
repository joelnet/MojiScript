const is = require('../types/is')

const isFunction = is(Function)

const ensureExecutable = x =>
  isFunction(x) ? x : () => x

module.exports = ensureExecutable
