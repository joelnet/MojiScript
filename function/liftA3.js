const liftA3 = func => m1 => m2 => m3 =>
  m1.map(func).ap(m2).ap(m3)

module.exports = liftA3
