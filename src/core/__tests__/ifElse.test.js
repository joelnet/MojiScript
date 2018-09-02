const ifElse = require('../ifElse')

describe('core/ifElse', () => {
  test('true returns true value', () => {
    const expected = 123
    const actual = ifElse(x => x)(expected)(666)(true)
    expect(actual).toBe(expected)
  })

  test('false returns false value', () => {
    const expected = 123
    const actual = ifElse(x => x)(666)(expected)(false)
    expect(actual).toBe(expected)
  })
})
