const map = require('../map')
const Just = require('../../type/Just')
const Nothing = require('../../type/Nothing')

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

  test('Just', () => {
    expect.assertions(1)
    const expected = 888
    const actual = map(double)(Just(444)).value
    expect(actual).toBe(expected)
  })

  test('functor', () => {
    expect.assertions(1)
    const expected = 888
    const actual = map(double)({ map: func => func(444) })
    expect(actual).toBe(expected)
  })

  test('Nothing', () => {
    expect.assertions(1)
    const expected = Nothing
    const actual = map(double)(expected)
    expect(actual).toBe(expected)
  })

  test('unmappable', () => {
    expect.assertions(1)
    const expected = TypeError('Object is not mappable.')
    const actual = () => map(double)(() => {})
    expect(actual).toThrowError(expected)
  })
})
