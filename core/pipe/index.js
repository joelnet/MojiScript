const maybeExec = require('../../_internal/maybeExec')

const pipe = (funcs = []) =>
  funcs.length === 0
    ? (() => { throw Error('pipe requires at least one argument') })()
    : value =>
      funcs.reduce(
        (acc, func) => acc.then(maybeExec(func)),
        Promise.resolve(value)
      )

module.exports = pipe
