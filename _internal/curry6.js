const signature = require('../_internal/debug/signature')

// curry6 :: Function -> Any -> Any -> Any -> Any -> Any -> Any -> Any
const curry6 = func => a => b => c => d => e => f => func(a, b, c, d, e, f)

module.exports = curry6

// Experimental debug code
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any', 'Any', 'Any', 'Any', 'Any' ], returnType: 'Any' })(curry6)
}
