
const allPass = predicates => (value) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const predicate of predicates) {
    if (!predicate(value)) {
      return false
    }
  }

  return true
}

module.exports = allPass
