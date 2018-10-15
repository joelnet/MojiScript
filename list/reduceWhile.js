/* eslint-disable */
const isThenable = require('../_internal/isThenable')
const iterableSerialReduceWhile = require('../_internal/iterableSerialReduceWhile')

const reduceWhile = predicate => func => initial => iterable => {
  let acc = initial
  const iterator = iterable[Symbol.iterator]()
  var { value, done } = iterator.next()

  while (!done && (!predicate || predicate(acc)(value))) {
    acc = func(acc)(value)
    if (isThenable(acc)) {
      return iterableSerialReduceWhile(predicate, (a, b) => func (a) (b), null, iterator, acc)
    }
    var { value, done } = iterator.next()
  }

  return acc
}

module.exports = reduceWhile
