const is = require('../type/is')

const clone = x => {
  if (is(Array)(x)) return [ ...x ]
  if (is(Function)(x)) return x.bind({})
  if (is(Set)(x)) return new Set(x)
  if (is(Map)(x)) return new Map(x)
  if (is(Object)(x)) return { ...x }
  if (is(String)(x)) return x
  if (is(Number)(x)) return x
  if (x === null) return null
  if (x === undefined) return undefined
  throw Error(`A value of type ${typeof x} cannot be cloned`)
}

module.exports = clone
