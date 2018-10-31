const signature = require('../_internal/debug/signature')
const isThenable = require('../_internal/isThenable')

// tap :: Function -> Any -> Any
const tap = func => value => {
  const result = func(value)
  return isThenable(result) ? result.then(() => value) : value
}

module.exports = tap

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('tap :: Function -> Any -> Any')(tap)
}
