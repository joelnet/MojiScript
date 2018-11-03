const { sign } = require('../_internal/debug/notarize')

// curry4 :: Function -> Any -> Any -> Any -> Any -> Any
const curry4 = func => a => b => c => d => func(a, b, c, d)

module.exports = curry4

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('curry :: Function -> Any -> Any -> Any -> Any -> Any')(curry4)
}
