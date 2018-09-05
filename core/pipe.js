const ensureExecutable = require('../internal/ensureExecutable')

const pipe = (xs = []) => value => xs.reduce(
  (acc, x) => acc.then(ensureExecutable(x)),
  Promise.resolve(value)
)

module.exports = pipe
