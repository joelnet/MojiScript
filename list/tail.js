const signature = require('../_internal/debug/signature')
const is = require('../type/is')

const isArray = is(Array)
const isFunction = is(Function)

// tail :: Array -> Array
const tail = iterable =>
  isArray(iterable) ? iterable.slice(1)
  : iterable && isFunction(iterable.next) ? [ ...iterable ].slice(1)
  : (() => { throw new Error(`type ${typeof iterable} is not supported`) })()

module.exports = tail

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('tail :: Array -> Array')(tail)
}
