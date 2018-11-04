const is = require('./is')
const { typeRight } = require('./_allTypes')

const isFunction = is(Function)

// Right :: Any -> Right
const Right = value => Object.create(
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
  return Right(value)
}

function flatMap(func) {
  const value = func(this.value)
  return value
}

function leftMap() {
  return Right(this.value)
}

function leftFlatMap() {
  return Right(this.value)
}

function ap(right) {
  return right.map(this.value)
}

const prototype = {
  '@@type': typeRight,
  ap,
  map,
  flatMap,
  leftMap,
  leftFlatMap,
  'fantasy-land/ap': ap,
  'fantasy-land/map': map,
  inspect() { return `Right (${isFunction(this.value) ? `function ${this.value.name}()` : JSON.stringify(this.value)})` }
}

Right['@@type'] = typeRight

module.exports = Right
