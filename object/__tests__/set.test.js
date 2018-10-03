const set = require('../set')

describe('object/set', () => {
  const obj = {
    a: 0
  }

  test('clone the object and mutate', () => {
    const mutation = set ('a') (1) (obj)

    const expected = false
    const actual = obj.a === mutation.a
    expect(actual).toBe(expected)
  })
})
