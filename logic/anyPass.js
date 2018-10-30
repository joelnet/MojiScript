
const anyPass = predicates => value => {
  for (const predicate of predicates) { // eslint-disable-line no-restricted-syntax
    if (predicate(value)) {
      return true
    }
  }

  return false
}

module.exports = anyPass
