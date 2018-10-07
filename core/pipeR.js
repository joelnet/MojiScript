/* eslint-disable */
const ensureExecutable = require('../_internal/ensureExecutable')

const pipeR = func => value => func (pipeR (func)).reduce (
  (acc, x) => acc.then (ensureExecutable (x)),
  Promise.resolve (value)
)

module.exports = pipeR
