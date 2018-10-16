function Identity(value) {
  const toString = () => `Identity (${value})`
  const map = func => Identity(func(value))

  return Object.freeze({
    '@@type': Identity['@@type'],
    value,
    map,
    'fantasy-land/map': map,
    toString,
    inspect: toString
  })
}

Identity['@@type'] = Symbol('mojiscript/type/Identity')

module.exports = Identity
