const flatMap = require('./flatMap')
const map = require('./map')

// ap :: Apply f => f (a -> b) -> f a -> f b
const ap = func => value => flatMap(f => map(v => f(v))(value))(func)

module.exports = ap
