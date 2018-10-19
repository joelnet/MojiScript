const clone = require('../clone')

describe('clone/clone', () => {
  test('clones an array', () => {
    const original = [ 1, 2, 3 ]
    const cloned = clone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })

  test('clones an object', () => {
    const original = { foo: 'bar' }
    const cloned = clone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })

  test('clones a function', () => {
    const original = x => x + 1
    const cloned = clone(original)
    expect(cloned).not.toBe(original)
    expect(cloned(5)).toBe(original(5))
  })

  test('clones a set', () => {
    const original = new Set([ 1, 2, 'a' ])
    const cloned = clone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })

  test('clones a map', () => {
    const original = new Map([ [ 'a', 1 ], [ 'b', 2 ] ])
    const cloned = clone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })

  test('returns a string', () => {
    const original = 'hello'
    const cloned = clone(original)
    expect(cloned).toBe(original)
  })

  test('returns a number', () => {
    const original = 1
    const cloned = clone(original)
    expect(cloned).toBe(original)
  })

  test('returns null when given null', () => {
    expect(clone(null)).toBeNull()
  })

  test('returns undefined when given undefined', () => {
    expect(clone(undefined)).toBeUndefined()
  })

  test('throws an error for any other type', () => {
    expect(() => clone(true)).toThrowError()
  })
})
