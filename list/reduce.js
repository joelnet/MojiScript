const reduce = func => initial => list =>
  Array.prototype.reduce.call(list, (acc, val) => func(acc)(val), initial)

module.exports = reduce
