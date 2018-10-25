const { typeJust } = require('./_allTypes')

const Just = value => Object.create(
  prototype, // eslint-disable-line
  {
    value: {
      value,
      writable: false,
      enumerable: true,
      configurable: false
    }
  }
)

function map(func) {
  return Just(func(this.value))
}

function ap(just) {
  return just.map(this.value)
}

const prototype = {
  '@@type': typeJust,
  ap,
  map,
  'fantasy-land/ap': ap,
  'fantasy-land/map': map,
  toString() { return this.value.toString() },
  inspect() { return `Just (${JSON.stringify(this.value)})` },
  toJSON() { return this.value }
}

Just['@@type'] = typeJust

module.exports = Just
