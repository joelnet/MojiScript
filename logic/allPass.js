/* eslint-disable */
const allPass = list => x => {
  for (let test of list) {
    if (!test(x)) {
      return false
    }
  }

  return true
}

module.exports = allPass
