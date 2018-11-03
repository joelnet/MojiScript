const { sign } = require('../_internal/debug/notarize')

// curry3 :: Function -> Any -> Any -> Any -> Any
const curry3 = func => a => b => c => func(a, b, c)

module.exports = curry3

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('curry :: Function -> Any -> Any -> Any -> Any')(curry3)
}
