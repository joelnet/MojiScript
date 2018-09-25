const curry5 = func => a => b => c => d => e =>
  func (a, b, c, d, e)

module.exports = curry5
