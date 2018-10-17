const is = require('../is')
const Just = require('../Just')
const { fromMaybe, toMaybe } = require('../Maybe')
const Nothing = require('../Nothing')

describe('Maybe', () => {
  describe('fromMaybe', () => {
    test('Nothing returns null', () => {
      expect.assertions(1)
      const expected = null
      const actual = fromMaybe(expected)(Nothing)
      expect(actual).toBe(expected)
    })

    test('Nothing returns 0', () => {
      expect.assertions(1)
      const expected = 0
      const actual = fromMaybe(expected)(Nothing)
      expect(actual).toBe(expected)
    })

    test('Just returns value', () => {
      expect.assertions(1)
      const expected = 888
      const actual = fromMaybe(null)(Just(888))
      expect(actual).toBe(expected)
    })

    test('Unsupported returns null', () => {
      expect.assertions(1)
      const expected = null
      const actual = fromMaybe(null)({})
      expect(actual).toBe(expected)
    })
  })

  describe('toMaybe', () => {
    test('null is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = toMaybe(null)
      expect(actual).toBe(expected)
    })

    test('undefined is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = toMaybe(undefined)
      expect(actual).toBe(expected)
    })

    test('0 is Just', () => {
      expect.assertions(1)
      const expected = true
      const actual = is(Just)(toMaybe(0))
      expect(actual).toBe(expected)
    })

    test('false is Just', () => {
      expect.assertions(1)
      const expected = true
      const actual = is(Just)(toMaybe(false))
      expect(actual).toBe(expected)
    })

    test('value is set', () => {
      expect.assertions(1)
      const expected = 888
      const actual = toMaybe(expected).value
      expect(actual).toBe(expected)
    })
  })
})
