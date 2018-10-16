const range = require('../range')

describe('list/range', () => {
  test('creates range', () => {
    const expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    const actual = [ ...range(0)(10) ]
    expect(actual).toMatchObject(expected)
  })
})
