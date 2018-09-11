const filter = require('../filter')

describe('list/filter', () => {
  const isOdd = num => num % 2 !== 0

  test('filters', () => {
    const expected = [1, 3]
    const actual = filter (isOdd) (expected)
    expect(actual).toMatchObject(expected)
  })
})
