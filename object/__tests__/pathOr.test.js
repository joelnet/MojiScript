const pathOr = require('../pathOr')

describe('object/pathOr', () => {
  test('empty', () => {
    const fallbackValue = 'fallback'
    expect(pathOr(fallbackValue)([])({ a: 1 })).toStrictEqual({ a: 1 })
    expect(pathOr(fallbackValue)([ 'b' ])({})).toBe(fallbackValue)
  })

  test('fallbacks', () => {
    const fallbackValue = 'fallback'
    expect(pathOr(fallbackValue)([ 'a' ])({ b: 1 })).toBe(fallbackValue)
    expect(pathOr(fallbackValue)([ 'a', 'b' ])({ a: 1 })).toBe(fallbackValue)
    expect(pathOr(fallbackValue)([ 'a', 'c' ])({ a: {} })).toBe(fallbackValue)
  })

  test('falsy values', () => {
    const fallbackValue = 'fallback'
    expect(pathOr(fallbackValue)([ 'a' ])({ a: undefined })).toBe(undefined)
    expect(pathOr(fallbackValue)([ 'a' ])({ a: false })).toBe(false)
    expect(pathOr(fallbackValue)([ 'a' ])({ a: null })).toBe(null)
    expect(pathOr(fallbackValue)([ 'a' ])({ a: 0 })).toBe(0)
  })

  test('truthy values', () => {
    const fallbackValue = 'fallback'
    expect(pathOr(fallbackValue)([ 'a' ])({ a: 1 })).toBe(1)
    expect(pathOr(fallbackValue)([ 'a' ])({ a: { b: 1 } })).toStrictEqual({ b: 1 })
    expect(pathOr(fallbackValue)([ 'a' ])({ a: [ 1, 2, 3 ] })).toStrictEqual([ 1, 2, 3 ])
  })

  test('nested values', () => {
    const fallbackValue = 'fallback'
    expect(pathOr(fallbackValue)([ 'a', 'b' ])({ a: { b: 1 } })).toBe(1)
    expect(pathOr(fallbackValue)([ 'a', 'b' ])({ a: { b: undefined } })).toBe(undefined)
    expect(pathOr(fallbackValue)([ 'a', 'b' ])({ a: { b: {} } })).toStrictEqual({})
    expect(pathOr(fallbackValue)([ 'a', 'b', 'c' ])({ a: { b: { c: [] } } })).toStrictEqual([])
  })
})
