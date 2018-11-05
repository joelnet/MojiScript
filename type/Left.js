const is = require('./is')
const { typeLeft } = require('./_allTypes')

const isFunction = is(Function)

// Left :: Any -> Left
const Left = value => Object.create(
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

function map() {
  return this
}

function flatMap() {
  return this
}

function leftMap(func) {
  const value = func(this.value)
  return Left(value)
}

function leftFlatMap(func) {
  const value = func(this.value)
  return value
}

function ap() {
  return this
}

const prototype = {
  '@@type': typeLeft,
  ap,
  map,
  flatMap,
  leftMap,
  leftFlatMap,
  'fantasy-land/ap': ap,
  'fantasy-land/map': map,
  inspect() { return `Left (${isFunction(this.value) ? `function ${this.value.name}()` : JSON.stringify(this.value)})` }
}

Left['@@type'] = typeLeft

module.exports = Left
