const isThenable = require ('../internal/isThenable')

const ifError = func => onError => onSuccess => value => { // eslint-disable-line arrow-body-style
  try {
    const result = func (value)
    return isThenable (result) // eslint-disable-line no-ternary
      ? result.then (onSuccess)
              .catch (onError)
      : onSuccess (result)
  } catch (err) {
    return onError (err)
  }
}

module.exports = ifError
