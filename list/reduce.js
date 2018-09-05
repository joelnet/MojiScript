const reduce = func => init => list =>
  Array.prototype.reduce.call(list, (acc, x) => func([acc, x]), init)

module.exports = reduce
