const signature = require('../_internal/debug/signature')

// sort :: Function -> Iterable -> Array
const sort = func => iterable => [ ...iterable ].sort((a, b) => func(a)(b))

module.exports = sort

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('sort :: Function -> Iterable -> Array')(sort)
}
