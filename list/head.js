const signature = require('../_internal/debug/signature')
const is = require('../type/is')

// head :: Array -> Any
const head = iterable => {
  if (is(Array)(iterable)) {
    return iterable[0]
  } if (iterable && iterable.next) {
    return iterable.next().value
  }

  return new Error(`type ${typeof iterable} not supported`)
}

module.exports = head

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('head :: Array -> Any')(head)
}
