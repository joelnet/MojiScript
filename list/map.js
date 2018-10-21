const call = require('../_internal/call')
const reduceWhile = require('./reduceWhile')
const isIterable = require('../_internal/isIterable')
const isFunctor = require('../_internal/isFunctor')

const asyncMapReducer = func => acc => x => call(val => (acc.push(val), acc))(func(x))

// map :: Function -> Mapable -> Array
const map = func => mapable =>
  isIterable(mapable) ? reduceWhile (null) (asyncMapReducer (func)) ([]) (mapable) // eslint-disable-line
  : isFunctor(mapable) ? (mapable['fantasy-land/map'] || mapable['map']).call(mapable, func) // eslint-disable-line
  : (() => { throw new TypeError('Object is not mappable.') })() // eslint-disable-line

module.exports = map
