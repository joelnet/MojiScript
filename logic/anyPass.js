/* eslint-disable */
const anyPass = list => x => {
  for (const test of list) {
    if (test(x)) {
      return true
    }
  }

  return false
}

module.exports = anyPass
