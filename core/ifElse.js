const ensureExecutable = require('../internal/ensureExecutable')

const ifElse = test => t => f => value =>
  ensureExecutable(test(value) ? t : f)(value)

module.exports = ifElse
