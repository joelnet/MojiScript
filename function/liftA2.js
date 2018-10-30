const signature = require('../_internal/debug/signature')

// log :: Function -> Apply -> Apply -> Apply
const liftA2 = func => m1 => m2 =>
  m1.map(func).ap(m2)

module.exports = liftA2

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('log :: Function -> Apply -> Apply -> Apply')(liftA2)
}
