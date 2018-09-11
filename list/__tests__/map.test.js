const map = require('../map')

describe('list/map', () => {
  const double = num => num * 2

  test('maps', () => {
    const expected = [2, 4, 6]
    const actual = map (double) ([1, 2, 3])
    expect(actual).toMatchObject(expected)
  })
})
