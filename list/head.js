const signature = require('../_internal/debug/signature')
const is = require('../type/is')

const isArray = is(Array)
const isFunction = is(Function)

// head :: Array -> Any
const head = iterable =>
  isArray(iterable) ? iterable[0]
  : iterable && isFunction(iterable.next) ? iterable.next().value
  : (() => { throw new Error(`type ${typeof iterable} is not supported`) })()

module.exports = head

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('head :: Array -> Any')(head)
}
