const tap = require('../utils/tap')

const log2 = func => tap(x => console.log(func(x)))

module.exports = log2
