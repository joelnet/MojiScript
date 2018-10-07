/* eslint-disable */
const isThenable = require('../_internal/isThenable')
const iterableSerialReduce = require('../_internal/iterableSerialReduce')

const asyncFilterReducer = func => (acc, x) => {
  const result = func(x)
  return isThenable(result)
    ? result.then(value => (value && acc.push(x), acc))
    : (result && acc.push(x), acc)
}

const filter = predicate => iterable => {
  const values = []
  const iterator = iterable[Symbol.iterator]()
  var { value, done } = iterator.next()

  while (!done) {
    const result = predicate(value)
    if (isThenable(result)) {
      return iterableSerialReduce(asyncFilterReducer(predicate), null, iterator, result.then(test => values.concat(test ? value : [])))
    }
    if (result) {
      values.push(value)
    }
    var { value, done } = iterator.next()
  }

  return values
}

module.exports = filter
