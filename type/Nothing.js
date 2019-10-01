const { typeNothing } = require('./_allTypes')
const Just = require('./Just')

const Nothing = Object.freeze(Object.create(
  {
    '@@type': typeNothing,
    toString: () => '',
    inspect: () => 'Nothing',
    ap: () => Nothing,
    map: () => Nothing,
    tap: () => Nothing,
    leftMap: func => Just(func()),
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
