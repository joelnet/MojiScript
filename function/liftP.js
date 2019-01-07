const liftP = arity => {
  if (arity < 1) throw new Error('arity must be >= 1')
  return func => promise => {
    const next = Promise.resolve(promise).then(value => Promise.resolve(func).then(f => f(value)))
    return (arity < 2) ? next : liftP(arity - 1)(next)
  }
}

module.exports = liftP
