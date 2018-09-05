const ifElse = require('../ifElse')

describe('core/ifElse', () => {
  test('true returns true value', () => {
    const expected = 888
    const actual = ifElse(x => x)(expected)(666)(true)
    expect(actual).toBe(expected)
  })

  test('false returns false value', () => {
    const expected = 888
    const actual = ifElse(x => x)(666)(expected)(false)
    expect(actual).toBe(expected)
  })

  test('true returns executes true branch', () => {
    const expected = 888
    const actual = ifElse(x => true)(x => x + 1)(666)(887)
    expect(actual).toBe(expected)
  })

  test('false returns false value', () => {
    const expected = 888
    const actual = ifElse(x => false)(666)(x => x + 1)(887)
    expect(actual).toBe(expected)
  })
})
