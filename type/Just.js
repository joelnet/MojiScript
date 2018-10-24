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

function map(func) {
  return Just(func(this.value))
}

const prototype = {
  '@@type': typeJust,
  map,
  'fantasy-land/map': map,
  toString() { return this.value.toString() },
  inspect() { return `Just (${JSON.stringify(this.value)})` },
  toJSON() { return this.value }
}

Just['@@type'] = typeJust

module.exports = Just
