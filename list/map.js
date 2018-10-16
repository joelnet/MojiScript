const call = require('../_internal/call')
const reduceWhile = require('./reduceWhile')

const asyncMapReducer = func => acc => x => call(val => (acc.push(val), acc))(func(x))

// map :: Function -> Iterable -> Array
const map = func => iterable => reduceWhile (null) (asyncMapReducer (func)) ([]) (iterable) // eslint-disable-line

module.exports = map
