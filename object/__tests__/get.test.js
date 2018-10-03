const get = require('../get')

describe('object/get', () => {
  const obj = {
    a: 1
  }

  test('success returns the object value', () => {
    const expected = obj.a
    const actual = get ('a') (obj)
    expect(actual).toBe(expected)
  })
})
