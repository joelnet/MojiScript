const ap = require('../list/ap')
const map = require('../list/map')

const liftA = arity => {
  if (arity < 1) throw new Error('arity must be >= 1')

  return func => array => {
    const next = arity => apply => array => {
      const value = ap(apply)(array)
      return arity < 2 ? value : next(arity - 1)(value)
    }

    const value = map(func)(array)
    return arity < 2 ? value : next(arity - 1)(value)
  }
}

module.exports = liftA
