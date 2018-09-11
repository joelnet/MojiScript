const isThenable = obj =>
  obj != null && typeof obj.then === 'function'

module.exports = isThenable
