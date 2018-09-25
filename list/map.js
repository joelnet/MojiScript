/* eslint-disable */
const isThenable = require('../internal/isThenable')
const serialReduce = require('../internal/serialReduce')

const asyncMapReducer = func => (acc, x) => {
  const result = func(x)
  return isThenable(result)
    ? result.then(value => (acc.push(value), acc))
    : (acc.push(result), acc)
}

const map = func => xs => {
  const values = []
  for (let i = 0; i < xs.length; i++) {
    const result = func(xs[i])
    if (isThenable(result)) {
      return serialReduce(asyncMapReducer(func), [], values.concat(xs), i + 1, result.then(v => [ v ]))
    } else {
      values.push(result)
    }
  }
  return values
}

module.exports = map
