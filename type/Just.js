const { typeJust } = require('./_allTypes')

const Just = value => Object.create(
  prototype, // eslint-disable-line
  {
    value: {
      value,
      writable: false,
      configurable: false
    }
  }
)

function toString() {
  return `Just (${JSON.stringify(this.value)})`
}

function map(func) {
  return Just(func(this.value))
}

const prototype = {
  '@@type': typeJust,
  map,
  'fantasy-land/map': map,
  toString,
  inspect: toString,
  toJSON() { return this.value }
}

Just['@@type'] = typeJust

module.exports = Just
