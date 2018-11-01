const signature = require('../_internal/debug/signature')
const is = require('./is')
const Left = require('./Left')
const Right = require('./Right')
const { typeEither } = require('./_allTypes')

const isRight = is(Right)

// fromFalsy :: Any -> Either
const fromFalsy = value => value ? Right(value) : Left

// fromMaybe :: Any -> Either -> Any
const fromEither = def => either => isRight(either) ? either.value : def

// fromNullable :: Any -> Maybe
const fromNullable = value => value == null ? Left : Right(value)

module.exports['@@type'] = typeEither
module.exports.fromFalsy = fromFalsy
module.exports.fromEither = fromEither
module.exports.fromNullable = fromNullable

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports['@@type'] = typeEither
  module.exports.fromFalsy = signature('fromFalsy :: Any -> Either')(fromFalsy)
  module.exports.fromEither = signature('fromEither :: Any -> Either -> Any')(fromEither)
  module.exports.fromNullable = signature('fromNullable :: Any -> Either')(fromNullable)
}
