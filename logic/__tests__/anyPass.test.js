const anyPass = require('../anyPass')

describe('logic/anyPass', () => {
  const isEven = num => num % 2 === 0
  const isLessThan10 = num => num < 10

  test('no tests returns false', () => {
    const expected = false
    const actual = anyPass([])({})
    expect(actual).toBe(expected)
  })

  test('one pass returns true', () => {
    const expected = true
    const actual = anyPass([ isEven, isLessThan10 ])(7)
    expect(actual).toBe(expected)
  })

  test('all fail returns true', () => {
    const expected = false
    const actual = anyPass([ isEven, isLessThan10 ])(99)
    expect(actual).toBe(expected)
  })
})
