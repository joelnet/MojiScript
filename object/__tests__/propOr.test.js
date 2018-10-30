const propOr = require('../propOr')

describe('object/propOr', () => {
  test('fallbacks', () => {
    const fallbackValue = 'fallback'
    expect(propOr(fallbackValue)('')({})).toBe(fallbackValue)
    expect(propOr(fallbackValue)('')({ a: 1 })).toBe(fallbackValue)
    expect(propOr(fallbackValue)('a')({})).toBe(fallbackValue)
    expect(propOr(fallbackValue)('a')({ b: 1 })).toBe(fallbackValue)
  })
  test('falsy values', () => {
    const fallbackValue = 'fallback'
    expect(propOr(fallbackValue)('a')({ a: undefined })).toBe(undefined)
    expect(propOr(fallbackValue)('a')({ a: false })).toBe(false)
    expect(propOr(fallbackValue)('a')({ a: null })).toBe(null)
    expect(propOr(fallbackValue)('a')({ a: 0 })).toBe(0)
  })
  test('truthy values', () => {
    const fallbackValue = 'fallback'
    expect(propOr(fallbackValue)('a')({ a: 1 })).toBe(1)
    expect(propOr(fallbackValue)('a')({ a: { b: 1 } })).toStrictEqual({ b: 1 })
    expect(propOr(fallbackValue)('a')({ a: [ 1, 2, 3 ] })).toStrictEqual([ 1, 2, 3 ])
  })
})
