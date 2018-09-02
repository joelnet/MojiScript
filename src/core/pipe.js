const sleep = require('../threading/sleep')
const isFunction = require('../is/isFunction')

const ensureExecutable = x =>
  isFunction(x) ? x : () => x

const pipe = (...xs) => xs.reduce(
  (acc, x) => acc.then(ensureExecutable(x)),
  sleep(0)()
)

module.exports = pipe
