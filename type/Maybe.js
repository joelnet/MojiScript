const signature = require('../_internal/debug/signature')
const is = require('./is')
const Just = require('./Just')
const Nothing = require('./Nothing')
const { typeMaybe } = require('./_allTypes')

const isJust = is(Just)

// fromFalsy :: Any -> Maybe
const fromFalsy = value => value ? Just(value) : Nothing

// fromMaybe :: Any -> Maybe -> Any
const fromMaybe = def => maybe => isJust(maybe) ? maybe.value : def

// fromNullable :: Any -> Maybe
const fromNullable = value => value == null ? Nothing : Just(value)

// unlift :: Function -> Array -> Any
const unlift = func => (...args) =>
  func(...args.map(fromNullable)).value

module.exports['@@type'] = typeMaybe
module.exports.fromFalsy = fromFalsy
module.exports.fromMaybe = fromMaybe
module.exports.fromNullable = fromNullable
module.exports.unlift = unlift

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports['@@type'] = typeMaybe
  module.exports.fromFalsy = signature('fromFalsy :: Any -> Maybe')(fromFalsy)
  module.exports.fromMaybe = signature('fromMaybe :: Any -> Maybe -> Any')(fromMaybe)
  module.exports.fromNullable = signature('fromNullable :: Any -> Maybe')(fromNullable)
}
