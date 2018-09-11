const filter = f => x =>
  Array.prototype.filter.call(x, f)

module.exports = filter
