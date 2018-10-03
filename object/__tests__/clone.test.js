const clone = require('../clone')

describe('object/clone', () => {
  const obj = {
    a: {
      b: {
        c: {
          d: 2
        }
      }
    }
  }

  test('performs deep object clone', () => {
    const obj2 = clone(obj)
    obj2.a.b.c.d = 3

    const expected = false
    const actual = obj2.a.b.c.d === obj.a.b.c.d
    expect(actual).toBe(expected)
  })
})
