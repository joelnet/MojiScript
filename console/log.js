const signature = require('../_internal/debug/signature')
const tap = require('../function/tap')

// log :: a -> a
const log = tap(x => console.log(x)) // eslint-disable-line no-console

module.exports = log

// Experimental debug code
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature({ method: 'log', args: [ 'a' ], returnType: 'a' })(log)
}
