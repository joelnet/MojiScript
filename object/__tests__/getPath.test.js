const getPath = require('../getPath')

describe('object/getPath', () => {
  const obj = {
    a: {
      b: {
        c: {
          d: 0
        }
      }
    }
  }

  test('success returns the object value', () => {
    const expected = obj.a.b.c.d
    const actual = getPath ([ 'a', 'b', 'c', 'd' ]) (obj)
    expect(actual).toBe(expected)
  })

  test('fail returns null', () => {
    const expected = null
    const actual = getPath ([ 'a', 'b', 'c', 'e' ]) (obj)
    expect(actual).toBe(expected)
  })

  test('no keys returns null', () => {
    const expected = null
    const actual = getPath ([]) (obj)
    expect(actual).toBe(expected)
  })
})
