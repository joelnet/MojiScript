const curry = require('../curry')

describe('function/curry', () => {
  function add() {
    return Array.from(arguments).reduce((a, b) => a + b)
  }

  test('curry1 throws', () => {
    const actual = () => curry(1)(add)
    expect(actual).toThrow(Error('Cannot curry a function with 1 arguments.'))
  })

  test('curry2', () => {
    const expected = 3
    const addCurried = curry(2)(add)
    const actual = addCurried(1)(2)
    expect(actual).toBe(expected)
  })

  test('curry3', () => {
    const expected = 7
    const addCurried = curry(3)(add)
    const actual = addCurried(1)(2)(4)
    expect(actual).toBe(expected)
  })

  test('curry4', () => {
    const expected = 15
    const addCurried = curry(4)(add)
    const actual = addCurried(1)(2)(4)(8)
    expect(actual).toBe(expected)
  })

  test('curry5', () => {
    const expected = 31
    const addCurried = curry(5)(add)
    const actual = addCurried(1)(2)(4)(8)(16)
    expect(actual).toBe(expected)
  })

  test('curry6', () => {
    const expected = 63
    const addCurried = curry(6)(add)
    const actual = addCurried(1)(2)(4)(8)(16)(32)
    expect(actual).toBe(expected)
  })

  test('curry7 throws', () => {
    const actual = () => curry(7)(add)
    expect(actual).toThrow(Error('Cannot curry a function with 7 arguments.'))
  })
})
