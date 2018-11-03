const { sign } = require('../_internal/debug/notarize')

// prepend :: String -> String -> String
const prepend = pre => post => `${pre}${post}`

module.exports = prepend

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('prepend :: String -> String -> String')(prepend)
}
