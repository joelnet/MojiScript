const replace = require('../replace')

describe('string/replace', () => {
  test('replaces string', () => {
    const expected = 'A_C'
    const actual = replace('B')('_')('ABC')
    expect(actual).toBe(expected)
  })

  test('replaces multiple', () => {
    const expected = 'A_C A_C A_C'
    const actual = replace('B')('_')('ABC ABC ABC')
    expect(actual).toBe(expected)
  })

  test('replaces special characters', () => {
    const expected = 'A*C A*C A*C'
    const actual = replace('B')('*')('ABC ABC ABC')
    expect(actual).toBe(expected)
  })
})
