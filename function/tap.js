
const isThenable = require('../_internal/isThenable')

const tap = func => value => {
  const result = func(value)
  return isThenable(result) ? result.then(() => value) : value
}

module.exports = tap
