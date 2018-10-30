const signature = require('../_internal/debug/signature')

// curry5 :: Function -> Any -> Any -> Any -> Any -> Any -> Any
const curry5 = func => a => b => c => d => e => func(a, b, c, d, e)

module.exports = curry5

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any', 'Any', 'Any', 'Any' ], returnType: 'Any' })(curry5)
}
