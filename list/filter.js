/* eslint-disable */
const isThenable = require('../internal/isThenable')
const serialReduce = require('../internal/serialReduce')

const asyncFilterReducer = func => (acc, x) => {
  const result = func(x)
  return isThenable(result)
    ? result.then(value => (value && acc.push(x), acc))
    : (result && acc.push(x), acc)
}

const filter = func => iterable => {
  const values = []
  for (let i = 0; i < iterable.length; i++) {
    const x = iterable[i]
    const result = func(x)
    if (isThenable(result)) {
      return serialReduce(asyncFilterReducer(func), [], values.concat(iterable), i + 1, result.then(() => [ x ]))
    } else if (result) {
      values.push(x)
    }
  }
  return values
}

module.exports = filter
