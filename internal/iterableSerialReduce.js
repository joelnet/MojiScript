/* eslint-disable */
const iterableSerialReduce = (func, initial, iterable, promise = Promise.resolve(initial)) => {
  const iterator = iterable[Symbol.iterator]()
  const { value, done } = iterator.next()
  return done
    ? promise
    : promise.then(() =>
        iterableSerialReduce(
        func,
        initial,
        iterator,
        promise.then(acc => func(acc, value))
      ))
}

module.exports = iterableSerialReduce
