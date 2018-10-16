const type = Symbol('mojiscript/type/Nothing')
const toString = () => 'Nothing'

const Nothing = Object.freeze({
  '@@type': type,
  map: () => Nothing,
  'fantasy-land/map': () => Nothing,
  toString,
  inspect: toString
})

module.exports = Nothing
