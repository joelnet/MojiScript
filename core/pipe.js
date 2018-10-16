
const ensureExecutable = require('../_internal/ensureExecutable')

const pipe = (funcs = []) => value => funcs.reduce(
  (acc, func) => acc.then(ensureExecutable(func)),
  Promise.resolve(value),
)

module.exports = pipe
