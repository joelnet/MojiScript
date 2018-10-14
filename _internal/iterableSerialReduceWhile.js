/* eslint-disable */
const iterableSerialReduceWhile = async (predicate, func, initial, iterable, promise = Promise.resolve(initial)) => {
    const iterator = iterable[Symbol.iterator]()
    const { value, done } = iterator.next()
    const currentAcc = await promise
    return done || !predicate (currentAcc) (value)
      ? promise
      : promise.then(() =>
          iterableSerialReduceWhile(
          predicate,
          func,
          initial,
          iterator,
          promise.then(acc => func(acc, value))
        ))
  }
  
  module.exports = iterableSerialReduceWhile
  