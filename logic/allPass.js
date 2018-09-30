/* eslint-disable */
const allPass = list => x => {
  for (const test of list) {
    if (!test(x)) {
      return false
    }
  }

  return true
}

module.exports = allPass
