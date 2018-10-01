const when = require('../when')

describe('logic/when', () => {
  const isOdd = num => num % 2 !== 0
  const isEven = num => num % 2 === 0
  const double = num => num * 2

  test('match calls function', () => {
    const expected = 888
    const actual = when (isEven) (double) (444)
    expect(actual).toBe(expected)
  })

  test('no match returns value', () => {
    const expected = 888
    const actual = when (isOdd) (double) (expected)
    expect(actual).toBe(expected)
  })
})
