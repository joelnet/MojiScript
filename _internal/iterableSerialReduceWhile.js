const is = require('../type/is')

const isFunction = is(Function)

const getIterator = iterable =>
  isFunction(iterable.next) ? iterable
  : isFunction(iterable[Symbol.asyncIterator]) ? iterable[Symbol.asyncIterator]()
  : iterable[Symbol.iterator]()

const iterableSerialReduceWhile = async (
  predicate,
  func,
  initial,
  iterable,
  promise = Promise.resolve(initial)
) => {
  const iterator = getIterator(iterable)
  const acc = await promise
  const { value, done } = await iterator.next()
  return done || (predicate && !predicate(acc)(value))
    ? acc
    : iterableSerialReduceWhile(
      predicate,
      func,
      initial,
      iterator,
      promise.then(acc => func(acc, value))
    )
}

module.exports = iterableSerialReduceWhile
