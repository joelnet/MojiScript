const { typeJust } = require('./_allTypes')

function Just(value) {
  const toString = () => `Just (${JSON.stringify(value)})`
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

Just['@@type'] = typeJust

module.exports = Just
