function Just(value) {
  const toString = () => `Just (${value})`
  const map = func => Just(func(value))

  return Object.freeze({
    '@@type': Just['@@type'],
    value,
    map,
    'fantasy-land/map': map,
    toString,
    inspect: toString
  })
}

Just['@@type'] = Symbol('mojiscript/type/Just')

module.exports = Just
