const { sign } = require('../_internal/debug/notarize')
const ifElse = require('./ifElse')
const I = require('../combinators/I')

// when :: Function -> Function -> Any -> Any
const when = condition => func => ifElse(condition)(func)(I)

module.exports = when

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('when :: Function -> Function -> Any -> Any')(when)
}
