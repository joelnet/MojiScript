const signature = require('../_internal/debug/signature')
const tap = require('../function/tap')

// log :: a -> a
const log = tap(x => console.log(x)) // eslint-disable-line no-console

module.exports = log

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('log :: a -> a')(log)
}
