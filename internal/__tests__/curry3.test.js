const curry3 = require('../curry3')

describe('internal/curry3', () => {
  const add = (x, y, z) => x + y + z

  test('curries', () => {
    const expected = 6
    const actual = curry3(add)(1)(2)(3)
    expect(actual).toBe(expected)
  })
})