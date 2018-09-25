const iterableSerialReduce = require('../iterableSerialReduce')

describe('internal/iterableSerialReduce', () => {
  const add = (x, y) => x + y
  const asyncAdd = (x, y) => Promise.resolve().then(() => x + y)
  function* iterator() {
    yield 1
    yield 2
    yield 3
  }

  test('sync array', () => {
    const expected = 6
    const actual = iterableSerialReduce(add, 0, [1, 2, 3])
    expect(actual).resolves.toBe(expected)
  })  

  test('sync array 2', () => {
    const expected = 6
    const actual = iterableSerialReduce(add, null, [2, 3], Promise.resolve(1))
    expect(actual).resolves.toBe(expected)
  })  

  test('sync iterator', () => {
    const expected = 6
    const actual = iterableSerialReduce(add, 0, iterator())
    expect(actual).resolves.toBe(expected)
  })  

  test('async array', () => {
    const expected = 6
    const actual = iterableSerialReduce(asyncAdd, 0, [1, 2, 3])
    expect(actual).resolves.toBe(expected)
  })  

  test('async iterator', () => {
    const expected = 6
    const actual = iterableSerialReduce(asyncAdd, 0, iterator())
    expect(actual).resolves.toBe(expected)
  })  
})
