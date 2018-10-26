const is = require('../is')
const Just = require('../Just')
const { fromFalsy, fromNullable, fromMaybe } = require('../Maybe')
const Nothing = require('../Nothing')

describe('Maybe', () => {
  describe('fromFalsy', () => {
    test('null is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = fromFalsy(null)
      expect(actual).toBe(expected)
    })

    test('undefined is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = fromFalsy(undefined)
      expect(actual).toBe(expected)
    })

    test('0 is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = fromFalsy(0)
      expect(actual).toBe(expected)
    })

    test('false is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = fromFalsy(false)
      expect(actual).toBe(expected)
    })

    test('empty string is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = fromFalsy('')
      expect(actual).toBe(expected)
    })

    test('NaN is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = fromFalsy(NaN)
      expect(actual).toBe(expected)
    })

    test('true is Just', () => {
      expect.assertions(1)
      const expected = Just(true)
      const actual = fromFalsy(true)
      expect(actual).toEqual(expected)
    })
  })

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

  describe('fromNullable', () => {
    test('null is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = fromNullable(null)
      expect(actual).toBe(expected)
    })

    test('undefined is Nothing', () => {
      expect.assertions(1)
      const expected = Nothing
      const actual = fromNullable(undefined)
      expect(actual).toBe(expected)
    })

    test('0 is Just', () => {
      expect.assertions(1)
      const expected = true
      const actual = is(Just)(fromNullable(0))
      expect(actual).toBe(expected)
    })

    test('false is Just', () => {
      expect.assertions(1)
      const expected = true
      const actual = is(Just)(fromNullable(false))
      expect(actual).toBe(expected)
    })

    test('value is set', () => {
      expect.assertions(1)
      const expected = 888
      const actual = fromNullable(expected).value
      expect(actual).toBe(expected)
    })
  })
})
