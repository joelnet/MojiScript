const is = require('./is')
const Just = require('./Just')
const Nothing = require('./Nothing')

const type = Symbol('mojiscript/type/Nothing')
const fromMaybe = maybe => is(Just)(maybe) ? maybe.value : null
const toMaybe = value => value == null ? Nothing : Just(value)

module.exports = {
  '@@type': type,
  fromMaybe,
  toMaybe
}
