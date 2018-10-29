const signature = require('../_internal/debug/signature')
const tap = require('../function/tap')

// error :: a -> a
const error = tap(x => console.error(x)) // eslint-disable-line no-console

module.exports = error

// Experimental debug code
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature({ method: 'error', args: [ 'a' ], returnType: 'a' })(error)
}
