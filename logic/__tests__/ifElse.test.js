const ifElse = require('../ifElse')

describe('logic/ifElse', () => {
  test('true returns executes true branch', () => {
    const expected = 888
    const actual = ifElse(() => true)(x => x + 1)(666)(887)
    expect(actual).toBe(expected)
  })

  test('false returns false value', () => {
    const expected = 888
    const actual = ifElse(() => false)(666)(x => x + 1)(887)
    expect(actual).toBe(expected)
  })
})
