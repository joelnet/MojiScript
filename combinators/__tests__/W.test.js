const W = require('../W')

describe('combinators/W', () => {
  test('returns value', () => {
    const expected = 888
    const f = a => b => a + b
    const actual = W(f)(444)
    expect(actual).toBe(expected)
  })
})
