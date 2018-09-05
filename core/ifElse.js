const maybeExec = require('../internal/maybeExec')

const ifElse = test => t => f => value =>
  maybeExec(test(value) ? t : f)(value)

module.exports = ifElse
