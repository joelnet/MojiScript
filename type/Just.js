const is = require('./is')
const Nothing = require('./Nothing')
const { typeJust } = require('./_allTypes')

const isFunction = is(Function)

// Just :: Any -> Just
const Just = value => Object.create(
  prototype, // eslint-disable-line no-use-before-define
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
  const value = func(this.value)
  return value === undefined ? Nothing : Just(value)
}

function flatMap(func) {
  return func(this.value)
}

function leftMap() {
  return Just(this.value)
}

function ap(just) {
  return just.map(this.value)
}

const prototype = {
  '@@type': typeJust,
  ap,
  map,
  flatMap,
  leftMap,
  'fantasy-land/ap': ap,
  'fantasy-land/map': map,
  toString() { return this.value.toString() },
  inspect() { return `Just (${isFunction(this.value) ? `function ${this.value.name}()` : JSON.stringify(this.value)})` },
  toJSON() { return this.value }
}

Just['@@type'] = typeJust

module.exports = Just
