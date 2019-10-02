const is = require('./is')
const { typeLeft } = require('./_allTypes')

const isError = is(Error)
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

function tap() {
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

function getOrElse(defaultValue) {
  return defaultValue
}

const prototype = {
  '@@type': typeLeft,
  ap,
  map,
  tap,
  flatMap,
  leftMap,
  leftFlatMap,
  getOrElse,
  'fantasy-land/ap': ap,
  'fantasy-land/map': map,
  inspect() {
    const value = isFunction(this.value) ? `function ${this.value.name}()`
      : isError(this.value) ? `[ Error: ${this.value.message} ]`
      : JSON.stringify(this.value)
    return `Left (${value})`
  }
}

Left['@@type'] = typeLeft

module.exports = Left
