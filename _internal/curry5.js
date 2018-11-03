const { sign } = require('../_internal/debug/notarize')

// curry5 :: Function -> Any -> Any -> Any -> Any -> Any -> Any
const curry5 = func => a => b => c => d => e => func(a, b, c, d, e)

module.exports = curry5

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('curry5 :: Function -> Any -> Any -> Any -> Any -> Any -> Any')(curry5)
}
