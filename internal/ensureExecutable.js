const isFunction = require('../is/isFunction')

const ensureExecutable = x =>
  isFunction(x) ? x : () => x

module.exports = ensureExecutable
