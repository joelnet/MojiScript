const is = require('./is')
const Just = require('./Just')
const Nothing = require('./Nothing')

const type = Symbol('mojiscript/type/Maybe')
const fromMaybe = def => maybe => is(Just)(maybe) ? maybe.value : def
const toMaybe = value => value == null ? Nothing : Just(value)

module.exports = {
  '@@type': type,
  fromMaybe,
  toMaybe
}
