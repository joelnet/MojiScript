const signature = require('../_internal/debug/signature')

// ifElse :: Function -> Function -> Function -> Any -> Any
const ifElse = condition => onTrue => onFalse => value =>
  (condition(value) ? onTrue : onFalse)(value)

module.exports = ifElse

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('ifElse :: Function -> Function -> Function -> Any')(ifElse)
}
