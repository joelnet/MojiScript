const { sign } = require('../_internal/debug/notarize')

// allPass :: Function -> Any -> Boolean
const allPass = predicates => value => {
  for (const predicate of predicates) { // eslint-disable-line no-restricted-syntax
    if (!predicate(value)) {
      return false
    }
  }

  return true
}

module.exports = allPass

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('allPass :: Function -> Any -> Boolean')(allPass)
}
