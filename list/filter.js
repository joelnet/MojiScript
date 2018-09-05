const filter = func => list => Array.prototype.filter.call(list, func)

module.exports = filter
