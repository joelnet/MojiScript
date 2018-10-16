
const ifElse = require('./ifElse')
const I = require('../combinators/I')

const unless = condition => ifElse(condition)(I)

module.exports = unless
