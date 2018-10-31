const signature = require('../_internal/debug/signature')

// sleep :: Number -> Any -> Promise
const sleep = milliseconds => value => new Promise(
  resolve => setTimeout(() => resolve(value), milliseconds),
)

module.exports = sleep

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('sleep :: Number -> Any -> Promise')(sleep)
}
