const { sign } = require('../_internal/debug/notarize')
const pathOr = require('./pathOr')

// propOr :: Any -> String -> Object -> Any
const propOr = fallback => prop => o => pathOr(fallback)([ prop ])(o)

module.exports = propOr

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('propOr :: Any -> String -> Object -> Any')(propOr)
}
