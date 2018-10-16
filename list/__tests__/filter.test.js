const filter = require('../filter')

describe('list/filter', () => {
  const isOdd = num => num % 2 !== 0
  const asyncIsOdd = num => Promise.resolve(num).then(isOdd)
  const asyncWhenIsOdd = num => isOdd(num) ? true : asyncIsOdd(num)

  function* iterator() {
    yield 1
    yield 2
    yield 3
  }

  test('sync array', () => {
    const expected = [ 1, 3 ]
    const actual = filter(isOdd)([ 1, 2, 3 ])
    expect(actual).toMatchObject(expected)
  })

  test('async array', () => {
    expect.assertions(1)
    const expected = [ 1, 3 ]
    const actual = filter(asyncIsOdd)([ 1, 2, 3 ])
    return expect(actual).resolves.toMatchObject(expected)
  })

  test('sync iterator', () => {
    const expected = [ 1, 3 ]
    const actual = filter(isOdd)(iterator())
    expect(actual).toMatchObject(expected)
  })

  test('async iterator', () => {
    expect.assertions(1)
    const expected = [ 1, 3 ]
    const actual = filter(asyncIsOdd)(iterator())
    return expect(actual).resolves.toMatchObject(expected)
  })

  test('mixed array', () => {
    expect.assertions(1)
    const expected = [ 1, 3 ]
    const actual = filter(asyncWhenIsOdd)([ 1, 2, 3 ])
    return expect(actual).resolves.toMatchObject(expected)
  })

  test('mixed iterator', () => {
    expect.assertions(1)
    const expected = [ 1, 3 ]
    const actual = filter(asyncWhenIsOdd)(iterator())
    return expect(actual).resolves.toMatchObject(expected)
  })
})
