const I = require('../I')

describe('combinators/I', () => {
  test('returns value', () => {
    const expected = 888
    const actual = I(expected)
    expect(actual).toBe(expected)
  })
})
