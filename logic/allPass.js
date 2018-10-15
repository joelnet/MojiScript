
const allPass = predicates => value => {
  for (const predicate of predicates) {
    if (!predicate(value)) {
      return false
    }
  }

  return true
}

module.exports = allPass
