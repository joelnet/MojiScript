
const isThenable = require('../_internal/isThenable')

/*
 * Takes a value or a Promise and applies func to it.
 */
// call :: Function -> Any -> Any | Promise<Any>
const call = func => value =>
  isThenable (value)
    ? value.then (func)
    : func (value)

module.exports = call
