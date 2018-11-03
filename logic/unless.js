const { sign } = require('../_internal/debug/notarize')
const ifElse = require('./ifElse')
const I = require('../combinators/I')

// unless :: Function -> Function -> Any -> Any
const unless = condition => ifElse(condition)(I)

module.exports = unless

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('unless :: Function -> Function -> Any -> Any')(unless)
}
