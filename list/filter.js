/* eslint-disable */
const isThenable = require('../internal/isThenable')
const iterableSerialReduce = require('../internal/iterableSerialReduce')

const asyncFilterReducer = func => (acc, x) => {
  const result = func(x)
  return isThenable(result)
    ? result.then(value => (value && acc.push(x), acc))
    : (result && acc.push(x), acc)
}

const filter = func => iterable => {
  const values = []
  const iterator = iterable[Symbol.iterator]()
  var { value, done } = iterator.next()

  while (!done) {
    const result = func(value)
    if (isThenable(result)) {
      return iterableSerialReduce(asyncFilterReducer(func), null, iterator, result.then(() => [ value ]))
    }
    if (result) {
      values.push(value)
    }
    var { value, done } = iterator.next()
  }

  return values
}

module.exports = filter
