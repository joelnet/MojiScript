const { typeNothing } = require('./_allTypes')

function leftMap(func) {
  const value = func()
  return value
}

const Nothing = Object.freeze(Object.create(
  {
    '@@type': typeNothing,
    toString: () => '',
    inspect: () => 'Nothing',
    ap: () => Nothing,
    map: () => Nothing,
    leftMap,
    flatMap: () => Nothing,
    'fantasy-land/map': () => Nothing,
    toJSON: () => null
  },
  {
    value: {
      value: null,
      writable: false,
      enumerable: true,
      configurable: false
    }
  }
))

module.exports = Nothing
