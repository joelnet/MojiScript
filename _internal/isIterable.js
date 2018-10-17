const is = require('../type/is')

const isFunction = is(Function)

const isIterable = iterable => iterable != null && isFunction(iterable[Symbol.iterator])

module.exports = isIterable
