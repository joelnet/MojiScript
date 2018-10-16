const map = require('../map')

describe('list/map', () => {
  const isOdd = num => num % 2 !== 0
  const double = num => num * 2
  const asyncDouble = num => Promise.resolve(num).then(double)
  const asyncWhenOddDouble = num => isOdd(num) ? double(num) : Promise.resolve(num).then(double)
  function* iterator() {
    yield 1
    yield 2
    yield 3
  }

  test('sync array', () => {
    expect.assertions(1)
    const expected = [ 2, 4, 6 ]
    const actual = map(double)([ 1, 2, 3 ])
    expect(actual).toMatchObject(expected)
  })

  test('async array', () => {
    expect.assertions(1)
    const expected = [ 2, 4, 6 ]
    const actual = map(asyncDouble)([ 1, 2, 3 ])
    return expect(actual).resolves.toMatchObject(expected)
  })

  test('sync iterable', () => {
    expect.assertions(1)
    const expected = [ 2, 4, 6 ]
    const actual = map(double)(iterator())
    expect(actual).toMatchObject(expected)
  })

  test('async iterable', () => {
    expect.assertions(1)
    const expected = [ 2, 4, 6 ]
    const actual = map(asyncDouble)(iterator())
    return expect(actual).resolves.toMatchObject(expected)
  })

  test('mixed array', () => {
    expect.assertions(1)
    const expected = [ 2, 4, 6 ]
    const actual = map(asyncWhenOddDouble)([ 1, 2, 3 ])
    return expect(actual).resolves.toMatchObject(expected)
  })

  test('mixed iterable', () => {
    expect.assertions(1)
    const expected = [ 2, 4, 6 ]
    const actual = map(asyncWhenOddDouble)(iterator())
    return expect(actual).resolves.toMatchObject(expected)
  })

  test('map does not cache', () => {
    expect.assertions(1)
    const expected = [ 2, 4 ]
    const mapDouble = map(double)
    mapDouble([ 1, 2 ])
    const actual = mapDouble([ 1, 2 ])
    expect(actual).toEqual(expected)
  })
})
