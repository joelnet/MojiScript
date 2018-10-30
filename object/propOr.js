const signature = require('../_internal/debug/signature')
const pathOr = require('./pathOr')

// propOr :: Any -> String -> Object -> Any
const propOr = fallback => prop => o => pathOr(fallback)([ prop ])(o)

module.exports = propOr

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('propOr :: Any -> String -> Object -> Any')(propOr)
}
