
const anyPass = predicates => (value) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const predicate of predicates) {
    if (predicate(value)) {
      return true
    }
  }

  return false
}

module.exports = anyPass
