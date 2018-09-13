const filter = f => x =>
  Array.prototype.filter.call (x, arg => f(arg))

module.exports = filter
