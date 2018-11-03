const { sign } = require('../_internal/debug/notarize')

// join :: Array -> Array -> Array
const join = separator => list => Array.prototype.join.call(list, separator)

module.exports = join

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('join :: Array -> Array -> Array')(join)
}
