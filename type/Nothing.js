const { typeNothing } = require('./_allTypes')

const toString = () => 'Nothing'

const Nothing = Object.freeze({
  '@@type': typeNothing,
  map: () => Nothing,
  'fantasy-land/map': () => Nothing,
  toString,
  inspect: toString
})

module.exports = Nothing
