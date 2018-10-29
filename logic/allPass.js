const allPass = predicates => value => {
  for (const predicate of predicates) { // eslint-disable-line no-restricted-syntax
    if (!predicate(value)) {
      return false
    }
  }

  return true
}

module.exports = allPass
