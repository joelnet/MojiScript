const isThenable = require('../internal/isThenable')

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
