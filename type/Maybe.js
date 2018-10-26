const is = require('./is')
const Just = require('./Just')
const Nothing = require('./Nothing')
const { typeMaybe } = require('./_allTypes')

const isJust = is(Just)

const fromMaybe = def => maybe => isJust(maybe) ? maybe.value : def
const fromNullable = value => value == null ? Nothing : Just(value)
const fromFalsy = value => value ? Just(value) : Nothing

module.exports = {
  '@@type': typeMaybe,
  fromFalsy,
  fromMaybe,
  fromNullable
}
