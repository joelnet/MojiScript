
const is = require('../type/is')

const isFunction = is(Function)

const maybeExec = maybeFunc => value => (isFunction(maybeFunc) ? maybeFunc(value) : maybeFunc)

module.exports = maybeExec
