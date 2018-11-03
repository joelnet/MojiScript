const { sign } = require('../_internal/debug/notarize')

// curry2 :: Function -> Any -> Any -> Any
const curry2 = func => a => b => func(a, b)

module.exports = curry2

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('curry :: Function -> Any -> Any -> Any')(curry2)
}
