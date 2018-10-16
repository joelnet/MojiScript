const join = require('../join')

describe('list/join', () => {
  test('joins', () => {
    const expected = '1,2,3'
    const actual = join(',')([ 1, 2, 3 ])
    expect(actual).toBe(expected)
  })
})
