const is = require('./is')
const { typeRight } = require('./_allTypes')

const isError = is(Error)
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

function tap(func) {
  func(this.value)
  return Right(this.value)
}


function flatMap(func) {
  const value = func(this.value)
  return value
}

function leftMap() {
  return this
}

function leftFlatMap() {
  return this
}

function ap(right) {
  return right.map(this.value)
}

function getOrElse() {
  return this.value
}

const prototype = {
  '@@type': typeRight,
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

    return `Right (${value})`
  }
}

Right['@@type'] = typeRight

module.exports = Right
