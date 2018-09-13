const map = f => x =>
  Array.prototype.map.call (x, arg => f(arg))

module.exports = map
