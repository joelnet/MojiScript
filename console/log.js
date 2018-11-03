const { sign } = require('../_internal/debug/notarize')
const tap = require('../function/tap')

// log :: a -> a
const log = tap(x => console.log(x)) // eslint-disable-line no-console

module.exports = log

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('log :: a -> a')(log)
}
