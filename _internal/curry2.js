const signature = require('../_internal/debug/signature')

// curry2 :: Function -> Any -> Any -> Any
const curry2 = func => a => b => func(a, b)

module.exports = curry2

// Experimental debug code
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature({ method: 'curry', args: [ 'Function', 'Any', 'Any' ], returnType: 'Any' })(curry2)
}
