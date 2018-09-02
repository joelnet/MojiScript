const ifElse = test => t => f => value =>
  test(value) ? t : f

module.exports = ifElse
