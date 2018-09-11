const reduce = require('../reduce')

describe('list/reduce', () => {
  const add = x => y => x + y

  test('reduces', () => {
    const expected = 6
    const actual = reduce (add) (0) ([1, 2, 3])
    expect(actual).toBe(expected)
  })
})
