const curry4 = func => a => b => c => d =>
  func (a, b, c, d)

module.exports = curry4
