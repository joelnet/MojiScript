/* eslint-disable */
const isThenable = require('../internal/isThenable')
const iterableSerialReduce = require('../internal/iterableSerialReduce')

const asyncMapReducer = func => (acc, x) => {
  const result = func(x)
  return isThenable(result)
    ? result.then(value => (acc.push(value), acc))
    : (acc.push(result), acc)
}

const map = func => iterable => {
  const values = []
  const iterator = iterable[Symbol.iterator]()
  var { value, done } = iterator.next()

  while (!done) {
    const result = func(value)

    if (isThenable(result)) {
      return iterableSerialReduce(asyncMapReducer(func), null, iterator, result.then(v => [ v ]))
    }

    values.push(result)
    var { value, done } = iterator.next()
  }

  return values
}

module.exports = map
