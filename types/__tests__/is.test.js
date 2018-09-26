const is = require('../is')

describe('types/is', () => {
  describe('Boolean', () => {
    const isBoolean = is(Boolean)

    test('true', () => {
      const expected = true
      const actual = isBoolean(true)
      expect(actual).toBe(expected)
    })

    test('false', () => {
      const expected = true
      const actual = isBoolean(false)
      expect(actual).toBe(expected)
    })
  })

  describe('function', () => {
    const isFunction = is(Function)

    test('function', () => {
      const expected = true
      const actual = isFunction(function() {})
      expect(actual).toBe(expected)
    })
  
    test('arrow function', () => {
      const expected = true
      const actual = isFunction(() => {})
      expect(actual).toBe(expected)
    })

    test('jest.fn()', () => {
      const expected = true
      const actual = isFunction(jest.fn())
      expect(actual).toBe(expected)
    })
  })
})
