const ifElse = require('./ifElse')
const I = require('../combinators/I')

const when = condition => func => ifElse (condition) (func) (I)

module.exports = when
