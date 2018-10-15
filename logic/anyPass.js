
const anyPass = predicates => value => {
  for (const predicate of predicates) {
    if (predicate(value)) {
      return true
    }
  }

  return false
}

module.exports = anyPass
