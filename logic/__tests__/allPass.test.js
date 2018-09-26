const allPass = require('../allPass')

describe('logic/allPass', () => {
  const isEven = num => num % 2 === 0
  const isLessThan10 = num => num < 10

  test('no tests returns true', () => {
    const expected = true
    const actual = allPass([])({})
    expect(actual).toBe(expected)
  })

  test('fail returns false', () => {
    const expected = false
    const actual = allPass([isEven, isLessThan10])(7)
    expect(actual).toBe(expected)
  })

  test('success returns true', () => {
    const expected = true
    const actual = allPass([isEven, isLessThan10])(8)
    expect(actual).toBe(expected)
  })
})
