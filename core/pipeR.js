const maybeExec = require('../_internal/maybeExec')

const pipeR = func => value => func(pipeR(func)).reduce(
  (acc, func) => acc.then(maybeExec(func)),
  Promise.resolve(value)
)

module.exports = pipeR
