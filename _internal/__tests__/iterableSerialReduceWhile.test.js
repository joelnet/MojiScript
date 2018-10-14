const iterableSerialReduceWhile = require('../iterableSerialReduceWhile')

describe('internal/iterableSerialReduceWhile', () => {
  const add = (x, y) => x + y
  const asyncAdd = (x, y) => Promise.resolve().then(() => x + y)
  const predicate = acc => x => acc <= 2
  function* iterator() {
    yield 1
    yield 2
    yield 3
  }

  test('sync array', () => {
    const expected = 3
    const actual = iterableSerialReduceWhile(predicate, add, 0, [1, 2, 3])
    expect(actual).resolves.toBe(expected)
  })  

  test('sync array 2', () => {
    const expected = 3
    const actual = iterableSerialReduceWhile(predicate, add, null, [2, 3], Promise.resolve(1))
    expect(actual).resolves.toBe(expected)
  })  

  test('sync iterator', () => {
    const expected = 3
    const actual = iterableSerialReduceWhile(predicate, add, 0, iterator())
    expect(actual).resolves.toBe(expected)
  })  

  test('async array', () => {
    const expected = 3
    const actual = iterableSerialReduceWhile(predicate, asyncAdd, 0, [1, 2, 3])
    expect(actual).resolves.toBe(expected)
  })  

  test('async iterator', () => {
    const expected = 3
    const actual = iterableSerialReduceWhile(predicate, asyncAdd, 0, iterator())
    expect(actual).resolves.toBe(expected)
  })  
})
