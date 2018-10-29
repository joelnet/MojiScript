const signature = require('../_internal/debug/signature')

// curry4 :: Function -> Any -> Any -> Any -> Any -> Any
const curry4 = func => a => b => c => d => func(a, b, c, d)

module.exports = curry4

// Experimental debug code
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any', 'Any', 'Any' ], returnType: 'Any' })(curry4)
}
