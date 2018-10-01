const ifElse = test => t => f => value =>
  (test (value) ? t : f) (value) // eslint-disable-line no-ternary

module.exports = ifElse
