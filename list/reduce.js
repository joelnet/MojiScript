/* eslint-disable */
const isThenable = require('../internal/isThenable')
const serialReduce = require('../internal/serialReduce')

const reduce = func => initial => list => {
  let acc = initial
  for (let i = 0; i < list.length; i++) {
    acc = func(acc)(list[i])
    if (isThenable(acc)) {
      return serialReduce((a, b) => func(a)(b), acc, list, i + 1, acc)
    }
  }
//  Array.prototype.reduce.call (list, (acc, val) => func (acc) (val), initial)
  return acc
}

module.exports = reduce
