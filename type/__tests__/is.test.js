const is = require('../is')
const Nothing = require('../Nothing')
const Just = require('../Just')
const Maybe = require('../Maybe')

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

    test('null', () => {
      const expected = false
      const actual = isBoolean(null)
      expect(actual).toBe(expected)
    })
  })

  describe('Function', () => {
    const isFunction = is(Function)

    test('function', () => {
      const expected = true
      const actual = isFunction(() => {})
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

    test('null', () => {
      const expected = false
      const actual = isFunction(null)
      expect(actual).toBe(expected)
    })
  })

  describe('Object', () => {
    const isObject = is(Object)

    test('Object', () => {
      const expected = true
      const actual = isObject({})
      expect(actual).toBe(expected)
    })

    test('new Object', () => {
      const expected = true
      const actual = isObject(new Object()) // eslint-disable-line no-new-object
      expect(actual).toBe(expected)
    })

    test('null', () => {
      const expected = false
      const actual = isObject(null)
      expect(actual).toBe(expected)
    })
  })

  describe('String', () => {
    const isString = is(String)

    test('String', () => {
      const expected = true
      const actual = isString('abc')
      expect(actual).toBe(expected)
    })

    test('empty String', () => {
      const expected = true
      const actual = isString('')
      expect(actual).toBe(expected)
    })

    test('null', () => {
      const expected = false
      const actual = isString(null)
      expect(actual).toBe(expected)
    })
  })

  describe('Array', () => {
    const isArray = is(Array)

    test('Array', () => {
      const expected = true
      const actual = isArray([ 1, 2, 3 ])
      expect(actual).toBe(expected)
    })

    test('empty Array', () => {
      const expected = true
      const actual = isArray([])
      expect(actual).toBe(expected)
    })

    test('new Array', () => {
      const expected = true
      const actual = isArray(new Array()) // eslint-disable-line no-array-constructor
      expect(actual).toBe(expected)
    })

    test('null', () => {
      const expected = false
      const actual = isArray(null)
      expect(actual).toBe(expected)
    })
  })

  describe('Promise', () => {
    const isPromise = is(Promise)

    test('Promise.resolve()', () => {
      const expected = true
      const actual = isPromise(Promise.resolve())
      expect(actual).toBe(expected)
    })

    test('Promise.reject()', () => {
      const expected = true
      const reject = Promise.reject()
      const actual = isPromise(reject)
      reject.catch(() => {}) // silence test errors
      expect(actual).toBe(expected)
    })

    test('thenable', () => {
      const expected = true
      const actual = isPromise({ then: resolve => resolve() })
      expect(actual).toBe(expected)
    })

    test('null', () => {
      const expected = false
      const actual = isPromise(null)
      expect(actual).toBe(expected)
    })
  })

  describe('Nothing', () => {
    test('Nothing', () => {
      const expected = true
      const nothing = Nothing
      const actual = is(Nothing)(nothing)
      expect(actual).toBe(expected)
    })

    test('null is false', () => {
      const expected = false
      const actual = is(Nothing)(null)
      expect(actual).toBe(expected)
    })

    test('undefined is false', () => {
      const expected = false
      const actual = is(Nothing)(undefined)
      expect(actual).toBe(expected)
    })

    test('{} is false', () => {
      const expected = false
      const actual = is(Nothing)({})
      expect(actual).toBe(expected)
    })

    test('function is false', () => {
      const expected = false
      const actual = is(Nothing)(() => {})
      expect(actual).toBe(expected)
    })
  })

  describe('Just', () => {
    test('Just', () => {
      const expected = true
      const just = Just(888)
      const actual = is(Just)(just)
      expect(actual).toBe(expected)
    })

    test('null is false', () => {
      const expected = false
      const actual = is(Just)(null)
      expect(actual).toBe(expected)
    })

    test('undefined is false', () => {
      const expected = false
      const actual = is(Just)(undefined)
      expect(actual).toBe(expected)
    })

    test('{} is false', () => {
      const expected = false
      const actual = is(Just)({})
      expect(actual).toBe(expected)
    })

    test('function is false', () => {
      const expected = false
      const actual = is(Just)(() => {})
      expect(actual).toBe(expected)
    })
  })

  describe('Maybe', () => {
    test('Just is Maybe', () => {
      const expected = true
      const actual = is(Maybe)(Just(888))
      expect(actual).toBe(expected)
    })
  })
})
