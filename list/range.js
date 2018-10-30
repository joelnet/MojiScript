const signature = require('../_internal/debug/signature')

// range :: Number -> Number -> Iterable
const range = start => function* range(end) {
  let current = start
  while (current < end) yield current++
}

module.exports = range

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('range :: Number -> Number -> Iterable')(range)
}
