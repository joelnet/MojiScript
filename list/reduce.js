const signature = require('../_internal/debug/signature')
const reduceWhile = require('./reduceWhile')

// reduce :: Function -> Any -> Iterable -> Any
const reduce = reduceWhile(null)

module.exports = reduce

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('reduce :: Function -> Any -> Iterable -> Any')(reduce)
}
