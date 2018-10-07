/* eslint-disable */
const isThenable = require('../_internal/isThenable')
const iterableSerialReduce = require('../_internal/iterableSerialReduce')

const reduce = func => initial => iterable => {
  let acc = initial
  const iterator = iterable[Symbol.iterator]()
  var { value, done } = iterator.next()

  while (!done) {
    acc = func(acc)(value)
    if (isThenable(acc)) {
      return iterableSerialReduce((a, b) => func(a)(b), null, iterator, acc)
    }
    var { value, done } = iterator.next()
  }

  return acc
}

module.exports = reduce
