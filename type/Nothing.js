const { typeNothing } = require('./_allTypes')

const Nothing = Object.freeze(Object.create(
  {
    '@@type': typeNothing,
    toString: () => '',
    inspect: () => 'Nothing',
    map: () => Nothing,
    'fantasy-land/map': () => Nothing,
    toJSON: () => null
  },
  {
    value: {
      value: null,
      writable: false,
      configurable: false
    }
  }
))

module.exports = Nothing
