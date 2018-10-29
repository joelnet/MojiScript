const signature = require('../_internal/debug/signature')

// log :: Function -> Apply -> Apply -> Apply
const liftA3 = func => m1 => m2 => m3 =>
  m1.map(func).ap(m2).ap(m3)

module.exports = liftA3

// Experimental debug code
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature({ method: 'liftA2', args: [ 'Function', 'Apply', 'Apply', 'Apply' ], returnType: 'Apply' })(liftA3)
}
