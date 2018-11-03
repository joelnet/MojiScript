const { sign } = require('../_internal/debug/notarize')

// curry6 :: Function -> Any -> Any -> Any -> Any -> Any -> Any -> Any
const curry6 = func => a => b => c => d => e => f => func(a, b, c, d, e, f)

module.exports = curry6

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('curry6 :: Function -> Any -> Any -> Any -> Any -> Any -> Any -> Any')(curry6)
}
