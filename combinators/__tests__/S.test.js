const S = require('../S')

describe('combinators/S', () => {
  test('returns value', () => {
    const expected = 30
    const f = a => b => a + b
    const g = a => a * 2
    const actual = S (f) (g) (10)
    expect(actual).toBe(expected)
  })
})
