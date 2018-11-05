const is = require('../is')
const Nothing = require('../Nothing')
const Just = require('../Just')
const Maybe = require('../Maybe')
const Either = require('../Either')
const Right = require('../Right')
const Left = require('../Left')

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
    test('Maybe', () => {
      const expected = true
      const maybe = Maybe
      const actual = is(Maybe)(maybe)
      expect(actual).toBe(expected)
    })

    test('Just is Maybe', () => {
      const expected = true
      const actual = is(Maybe)(Just(888))
      expect(actual).toBe(expected)
    })

    test('Nothing is Maybe', () => {
      const expected = true
      const actual = is(Maybe)(Nothing)
      expect(actual).toBe(expected)
    })

    test('null is false', () => {
      const expected = false
      const actual = is(Maybe)(null)
      expect(actual).toBe(expected)
    })

    test('undefined is false', () => {
      const expected = false
      const actual = is(Maybe)(undefined)
      expect(actual).toBe(expected)
    })

    test('{} is false', () => {
      const expected = false
      const actual = is(Maybe)({})
      expect(actual).toBe(expected)
    })

    test('function is false', () => {
      const expected = false
      const actual = is(Maybe)(() => {})
      expect(actual).toBe(expected)
    })
  })

  describe('Left', () => {
    test('Left', () => {
      const expected = true
      const left = Left
      const actual = is(Left)(left)
      expect(actual).toBe(expected)
    })

    test('null is false', () => {
      const expected = false
      const actual = is(Left)(null)
      expect(actual).toBe(expected)
    })

    test('undefined is false', () => {
      const expected = false
      const actual = is(Left)(undefined)
      expect(actual).toBe(expected)
    })

    test('{} is false', () => {
      const expected = false
      const actual = is(Left)({})
      expect(actual).toBe(expected)
    })

    test('function is false', () => {
      const expected = false
      const actual = is(Left)(() => {})
      expect(actual).toBe(expected)
    })
  })

  describe('Right', () => {
    test('Right', () => {
      const expected = true
      const right = Right(888)
      const actual = is(Right)(right)
      expect(actual).toBe(expected)
    })

    test('null is false', () => {
      const expected = false
      const actual = is(Right)(null)
      expect(actual).toBe(expected)
    })

    test('undefined is false', () => {
      const expected = false
      const actual = is(Right)(undefined)
      expect(actual).toBe(expected)
    })

    test('{} is false', () => {
      const expected = false
      const actual = is(Right)({})
      expect(actual).toBe(expected)
    })

    test('function is false', () => {
      const expected = false
      const actual = is(Right)(() => {})
      expect(actual).toBe(expected)
    })
  })

  describe('Either', () => {
    test('Either', () => {
      const expected = true
      const either = Either
      const actual = is(Either)(either)
      expect(actual).toBe(expected)
    })

    test('Right is Either', () => {
      const expected = true
      const actual = is(Either)(Right(888))
      expect(actual).toBe(expected)
    })

    test('Left is Either', () => {
      const expected = true
      const actual = is(Either)(Left)
      expect(actual).toBe(expected)
    })

    test('null is false', () => {
      const expected = false
      const actual = is(Either)(null)
      expect(actual).toBe(expected)
    })

    test('undefined is false', () => {
      const expected = false
      const actual = is(Either)(undefined)
      expect(actual).toBe(expected)
    })

    test('{} is false', () => {
      const expected = false
      const actual = is(Either)({})
      expect(actual).toBe(expected)
    })

    test('function is false', () => {
      const expected = false
      const actual = is(Either)(() => {})
      expect(actual).toBe(expected)
    })
  })

  describe('Set', () => {
    const isSet = is(Set)

    it('Set', () => {
      const expected = true
      const actual = isSet(new Set([ 1, 2 ]))
      expect(actual).toBe(expected)
    })

    it('Empty set', () => {
      const expected = true
      const actual = isSet(new Set())
      expect(actual).toBe(expected)
    })

    it('Array is false', () => {
      const expected = false
      const actual = isSet([])
      expect(actual).toBe(expected)
    })

    it('null is false', () => {
      const expected = false
      const actual = isSet(null)
      expect(actual).toBe(expected)
    })

    it('undefined', () => {
      const expected = false
      const actual = isSet(undefined)
      expect(actual).toBe(expected)
    })
  })

  describe('Map', () => {
    const isMap = is(Map)

    it('Map', () => {
      const expected = true
      const actual = isMap(new Map([
        [ 'one', 1 ]
      ]))
      expect(actual).toBe(expected)
    })

    it('Empty map', () => {
      const expected = true
      const actual = isMap(new Map())
      expect(actual).toBe(expected)
    })

    it('Object is false', () => {
      const expected = false
      const actual = isMap({})
      expect(actual).toBe(expected)
    })

    it('null is false', () => {
      const expected = false
      const actual = isMap(null)
      expect(actual).toBe(expected)
    })

    it('undefined is false', () => {
      const expected = false
      const actual = isMap(undefined)
      expect(actual).toBe(expected)
    })
  })
})
