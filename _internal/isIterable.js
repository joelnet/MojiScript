const is = require('../type/is')

const isFunction = is(Function)

const isIterable = iterable =>
  iterable != null
    && (isFunction(iterable[Symbol.iterator]) || isFunction(iterable[Symbol.asyncIterator]))

module.exports = isIterable
