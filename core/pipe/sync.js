const maybeExec = require('../../_internal/maybeExec')

const pipe = (funcs = []) =>
  funcs.length === 0
    ? (() => { throw Error('pipe/sync requires at least one argument') })()
    : value => funcs.reduce(
      (acc, func) => maybeExec(func)(acc),
      value
    )

module.exports = pipe
