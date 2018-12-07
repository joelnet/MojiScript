const signature = require('../_internal/debug/signature')
const isThenable = require('../_internal/isThenable')

// ifError :: Function -> Function -> Function -> Any -> Any
const ifError = func => onError => onSuccess => value => {
  try {
    const result = func(value)
    return isThenable(result)
      ? result.then(onSuccess).catch(onError)
      : onSuccess(result)
  } catch (err) {
    return onError(err)
  }
}

module.exports = ifError

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('ifError :: Function -> Function -> Function -> Any -> Any')(ifError)
}
