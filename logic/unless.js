const signature = require('../_internal/debug/signature')
const ifElse = require('./ifElse')
const I = require('../combinators/I')

// unless :: Function -> Function -> Any -> Any
const unless = condition => ifElse(condition)(I)

module.exports = unless

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('unless :: Function -> Function -> Any -> Any')(unless)
}
