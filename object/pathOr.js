const signature = require('../_internal/debug/signature')

// pathOr :: Any -> [String] -> Object -> Any
const pathOr = fallback => path => o => {
  for (const key of path) { // eslint-disable-line no-restricted-syntax
    if (!o || !Object.prototype.hasOwnProperty.call(o, key)) {
      return fallback
    }
    o = o[key] // eslint-disable-line no-param-reassign
  }
  return o
}

module.exports = pathOr

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('pathOr :: Any -> [String] -> Object -> Any')(pathOr)
}
