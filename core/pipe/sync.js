const maybeExec = require('../../_internal/maybeExec')

const pipe = (funcs = []) => value => funcs.reduce(
  (acc, func) => maybeExec(func)(acc),
  value
)

module.exports = pipe
