const { sign } = require('../_internal/debug/notarize')
const escapeRegExp = require('../_internal/escapeRegExp')

// replace :: String -> String -> String -> String
const replace = pattern => replacement => string =>
  string.replace(new RegExp(escapeRegExp(pattern), 'g'), replacement)

module.exports = replace

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('replace :: String -> String -> String -> String')(replace)
}
