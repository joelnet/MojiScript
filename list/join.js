const signature = require('../_internal/debug/signature')

// join :: Array -> Array -> Array
const join = separator => list => Array.prototype.join.call(list, separator)

module.exports = join

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('join :: Array -> Array -> Array')(join)
}
