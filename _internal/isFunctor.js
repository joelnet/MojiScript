const is = require('../type/is')

const isFunction = is(Function)

const isFunctor = functor =>
  functor != null && (isFunction(functor['fantasy-land/map']) || isFunction(functor.map))

module.exports = isFunctor
