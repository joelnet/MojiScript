const maybeExec = require('../_internal/maybeExec')
const call = require('../_internal/call')

const pipe = (funcs = []) => value => funcs.reduce(
  (acc, func) => call(maybeExec(func))(acc),
  value
)

module.exports = pipe
