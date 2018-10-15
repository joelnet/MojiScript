
const tap = require('../function/tap')

const logF = func => tap (x => console.log (func (x)))

module.exports = logF
