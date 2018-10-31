const signature = require('../_internal/debug/signature')

// prepend :: String -> String -> String
const prepend = pre => post => `${pre}${post}`

module.exports = prepend

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('prepend :: String -> String -> String')(prepend)
}
