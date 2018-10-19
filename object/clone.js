/* eslint-disable */
const is = require ('../type/is')

const clone = x => {
  if (is (Array) (x)) return [ ...x ]
  else if (is (Function) (x)) return x.bind({})
  else if (is (Set) (x)) return new Set(x)
  else if (is (Map) (x)) return new Map(x)
  else if (is (Object) (x)) return { ...x }
  else if (is (String) (x)) return x
  else if (is (Number) (x)) return x
  else if (x === null) return null
  else if (x === undefined) return undefined
  else throw `A value of type ${typeof x} cannot be cloned`
}

module.exports = clone
