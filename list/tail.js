const signature = require('../_internal/debug/signature')
const is = require('../type/is')

// tail :: Array -> Array
const tail = iterable => {
  if (is(Array)(iterable)) {
    return iterable.slice(1)
  } if (iterable && iterable.next) {
    const [ , ...rest ] = iterable
    return rest
  }

  return new Error(`type ${typeof iterable} not supported`)
}

module.exports = tail

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('tail :: Array -> Array')(tail)
}
