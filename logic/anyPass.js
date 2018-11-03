const { sign } = require('../_internal/debug/notarize')

// anyPass :: Function -> Any -> Boolean
const anyPass = predicates => value => {
  for (const predicate of predicates) { // eslint-disable-line no-restricted-syntax
    if (predicate(value)) {
      return true
    }
  }

  return false
}

module.exports = anyPass

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('anyPass :: Function -> Any -> Boolean')(anyPass)
}
