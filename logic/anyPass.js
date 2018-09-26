/* eslint-disable */
const anyPass = list => x => {
  for (let test of list) {
    if (test(x)) {
      return true
    }
  }

  return false
}

module.exports = anyPass
