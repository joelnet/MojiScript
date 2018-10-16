const K = require('../K')

describe('combinators/K', () => {
  test('returns value', () => {
    const expected = 888
    const actual = K(expected)(666)
    expect(actual).toBe(expected)
  })
})
