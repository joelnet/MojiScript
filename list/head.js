/* eslint-disable */
const head = iterable => {
  if (iterable instanceof Array) {
    return iterable[0]
  } else if (iterable && iterable.next) {
    return iterable.next().value
  }

  return new Error(`type ${typeof iterable} not supported`)
}
  
module.exports = head