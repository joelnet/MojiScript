const ifElse = test => t => f => value =>
  (test (value) ? t : f) (value)

module.exports = ifElse
