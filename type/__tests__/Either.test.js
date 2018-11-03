const is = require('../is')
const Right = require('../Right')
const Left = require('../Left')
const { fromFalsy, fromNullable, fromEither } = require('../Either')

describe('Either', () => {
  describe('fromFalsy', () => {
    test('null is Left', () => {
      expect.assertions(1)
      const expected = Left
      const actual = fromFalsy(null)
      expect(actual).toBe(expected)
    })

    test('undefined is Left', () => {
      expect.assertions(1)
      const expected = Left
      const actual = fromFalsy(undefined)
      expect(actual).toBe(expected)
    })

    test('0 is Left', () => {
      expect.assertions(1)
      const expected = Left
      const actual = fromFalsy(0)
      expect(actual).toBe(expected)
    })

    test('false is Left', () => {
      expect.assertions(1)
      const expected = Left
      const actual = fromFalsy(false)
      expect(actual).toBe(expected)
    })

    test('empty string is Left', () => {
      expect.assertions(1)
      const expected = Left
      const actual = fromFalsy('')
      expect(actual).toBe(expected)
    })

    test('NaN is Left', () => {
      expect.assertions(1)
      const expected = Left
      const actual = fromFalsy(NaN)
      expect(actual).toBe(expected)
    })

    test('true is Right', () => {
      expect.assertions(1)
      const expected = Right(true)
      const actual = fromFalsy(true)
      expect(actual).toEqual(expected)
    })
  })

  describe('fromEither', () => {
    test('Left returns null', () => {
      expect.assertions(1)
      const expected = null
      const actual = fromEither(expected)(Left)
      expect(actual).toBe(expected)
    })

    test('Left returns 0', () => {
      expect.assertions(1)
      const expected = 0
      const actual = fromEither(expected)(Left)
      expect(actual).toBe(expected)
    })

    test('Right returns value', () => {
      expect.assertions(1)
      const expected = 888
      const actual = fromEither(null)(Right(888))
      expect(actual).toBe(expected)
    })

    test('Unsupported returns null', () => {
      expect.assertions(1)
      const expected = null
      const actual = fromEither(null)({})
      expect(actual).toBe(expected)
    })
  })

  describe('fromNullable', () => {
    test('null is Left', () => {
      expect.assertions(1)
      const expected = Left
      const actual = fromNullable(null)
      expect(actual).toBe(expected)
    })

    test('undefined is Left', () => {
      expect.assertions(1)
      const expected = Left
      const actual = fromNullable(undefined)
      expect(actual).toBe(expected)
    })

    test('0 is Right', () => {
      expect.assertions(1)
      const expected = true
      const actual = is(Right)(fromNullable(0))
      expect(actual).toBe(expected)
    })

    test('false is Right', () => {
      expect.assertions(1)
      const expected = true
      const actual = is(Right)(fromNullable(false))
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
