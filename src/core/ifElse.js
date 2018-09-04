const ensureExecutable = require('../internal/ensureExecutable')

const ifElse = test => t => f => value =>
  test(value) ? ensureExecutable(t)(value) : ensureExecutable(f)(value)

module.exports = ifElse
