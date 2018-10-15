
const call = require('../_internal/call')
const reduceWhile = require('./reduceWhile')

const asyncMapReducer = func => acc => x =>
  call (val => (acc.push(val), acc)) (func (x))

// map :: Function -> Iterable -> Array
const map = func => reduceWhile (null) (asyncMapReducer (func)) ([])

module.exports = map
