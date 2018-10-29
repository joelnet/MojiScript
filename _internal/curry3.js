const signature = require('../_internal/debug/signature')

// curry3 :: Function -> Any -> Any -> Any -> Any
const curry3 = func => a => b => c => func(a, b, c)

module.exports = curry3

// Experimental debug code
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any', 'Any' ], returnType: 'Any' })(curry3)
}
