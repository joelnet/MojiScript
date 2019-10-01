const signature = require('../_internal/debug/signature')

// swap :: Function -> Function
const swap = func => a => b => func(b)(a)

module.exports = swap

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('swap :: Function -> Function')(swap)
}
