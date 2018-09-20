const replace = require('../replace')

describe('string/replace', () => {
  test('replaces string', () => {
    const expected = 'ABC'
    const actual = replace ('replace') ('B') ('AreplaceC')
    expect(actual).toBe(expected)
  })
})
