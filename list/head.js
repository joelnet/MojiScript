/* eslint-disable */
const is = require('../type/is')

const head = iterable => {
  if (is (Array) (iterable)) {
    return iterable[0]
  } else if (iterable && iterable.next) {
    return iterable.next().value
  }

  return new Error(`type ${typeof iterable} not supported`)
}
  
module.exports = head