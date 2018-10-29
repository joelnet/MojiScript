const is = require('../type/is')

const tail = iterable => {
  if (is(Array)(iterable)) {
    return iterable.slice(1)
  } if (iterable && iterable.next) {
    const [ , ...rest ] = iterable
    return rest
  }

  return new Error(`type ${typeof iterable} not supported`)
}

module.exports = tail
