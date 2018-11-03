const { sign } = require('../_internal/debug/notarize')

// log :: Function -> Apply -> Apply -> Apply
const liftA3 = func => m1 => m2 => m3 =>
  m1.map(func).ap(m2).ap(m3)

module.exports = liftA3

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('log :: Function -> Apply -> Apply -> Apply')(liftA3)
}
