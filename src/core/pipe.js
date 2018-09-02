const isFunction = require('../is/isFunction')

const ensureExecutable = x =>
  isFunction(x) ? x : () => x

const pipe = (...xs) => value => xs.reduce(
  (acc, x) => acc.then(ensureExecutable(x)),
  Promise.resolve(value)
)

module.exports = pipe
