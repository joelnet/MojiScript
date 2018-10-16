const is = require('./is')
const Just = require('./Just')
const Nothing = require('./Nothing')

const fromMaybe = maybe => is(Just)(maybe) ? maybe.value : null
const toMaybe = value => value == null ? Nothing : Just(value)

module.exports = {
  fromMaybe,
  toMaybe
}
