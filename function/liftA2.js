const liftA2 = func => m1 => m2 =>
  m1.map(func).ap(m2)

module.exports = liftA2
