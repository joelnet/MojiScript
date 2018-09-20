const unless = require('../unless')

describe('core/unless', () => {
  const isOdd = num => num % 2 !== 0
  const isEven = num => num % 2 === 0
  const double = num => num * 2

  test('match calls function', () => {
    const expected = 888
    const actual = unless (isOdd) (double) (444)
    expect(actual).toBe(expected)
  })

  test('no match returns value', () => {
    const expected = 888
    const actual = unless (isEven) (double) (expected)
    expect(actual).toBe(expected)
  })
})
