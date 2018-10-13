/* eslint-disable */
const sort = func => iterable => {
  const values = []
  const iterator = iterable[Symbol.iterator]()
  var { value, done } = iterator.next()

  while (!done) {
    values.push(value)
    var { value, done } = iterator.next()
  }

  return values.sort((a, b) => func(a) (b))
}

module.exports = sort
