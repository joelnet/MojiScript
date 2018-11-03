const { sign } = require('../_internal/debug/notarize')

// append :: String -> String -> String
const append = post => pre => `${pre}${post}`

module.exports = append

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('append :: String -> String -> String')(append)
}
