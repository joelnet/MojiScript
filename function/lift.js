const is = require('../type/is')
const liftA = require('./liftA')
const liftP = require('./liftP')

const isMapable = object => object && is(Function)(object.map)
const isThenable = object => object && is(Function)(object.then)

const lift = arity => func => object =>
  isMapable(object) ? liftA(arity)(func)(object)
  : isThenable(object) ? liftP(arity)(func)(object)
  : (() => { throw new Error(`Cannot lift unsupported type "${typeof object}"`) })()

module.exports = lift
