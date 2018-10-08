/* eslint-disable */
const curry2 = require('../_internal/curry2')
const curry3 = require('../_internal/curry3')
const curry4 = require('../_internal/curry4')
const curry5 = require('../_internal/curry5')
const curry6 = require('../_internal/curry6')

const curry = n =>
  n === 2 ? curry2
  : n === 3 ? curry3
  : n === 4 ? curry4
  : n === 5 ? curry5
  : n === 6 ? curry6
  : (() => { throw new Error(`Cannot curry a function with ${n} arguments.`) })()

module.exports = curry