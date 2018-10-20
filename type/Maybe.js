const is = require('./is')
const Just = require('./Just')
const Nothing = require('./Nothing')
const { typeMaybe } = require('./_allTypes')

const fromMaybe = def => maybe => is(Just)(maybe) ? maybe.value : def
const toMaybe = value => value == null ? Nothing : Just(value)

module.exports = {
  '@@type': typeMaybe,
  fromMaybe,
  toMaybe
}
