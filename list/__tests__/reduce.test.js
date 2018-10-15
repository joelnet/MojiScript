const range = require('../range')
const reduce = require('../reduce')

describe('list/reduce', () => {
  const isEven = num => num % 2 === 0
  const add = x => y => x + y
  const asyncAdd = x => y => Promise.resolve(y).then(add(x))
  const asyncWhenEvenAdd = x => y => isEven(y) ? asyncAdd(x)(y) : add(x)(y)

  test('sync array', () => {
    const expected = 6
    const actual = reduce(add)(0)([1, 2, 3])
    expect(actual).toBe(expected)
  })

  test('async array', () => {
    expect.assertions(1)
    const expected = 6
    const actual = reduce(asyncAdd)(0)([1, 2, 3])
    return expect(actual).resolves.toBe(expected)
  })

  test('sync iterable', () => {
    const expected = 6
    const actual = reduce(add)(0)(range(1)(4))
    expect(actual).toBe(expected)
  })

  test('async iterable', () => {
    expect.assertions(1)
    const expected = 6
    const actual = reduce(asyncAdd)(0)(range(1)(4))
    return expect(actual).resolves.toBe(expected)
  })

  test('async array mixed', () => {
    expect.assertions(1)
    const expected = 6
    const actual = reduce(asyncWhenEvenAdd)(0)([1, 2, 3])
    return expect(actual).resolves.toBe(expected)
  })

  test('async iterable mixed', () => {
    expect.assertions(1)
    const expected = 6
    const actual = reduce(asyncWhenEvenAdd)(0)([1, 2, 3])
    return expect(actual).resolves.toBe(expected)
  })

  test('async iterable mixed', () => {
    expect.assertions(1)
    const expected = 6
    const actual = reduce(asyncWhenEvenAdd)(0)(range(0)(4))
    return expect(actual).resolves.toBe(expected)
  })
})
