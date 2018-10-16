const maybeExec = require('../_internal/maybeExec')

const pipe = (funcs = []) => value => funcs.reduce(
  (acc, func) => acc.then(maybeExec(func)),
  Promise.resolve(value)
)

module.exports = pipe
