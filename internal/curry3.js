const curry3 = func => a => b => c =>
  func(a, b, c)

module.exports = curry3
