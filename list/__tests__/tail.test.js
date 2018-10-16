const tail = require('../tail')
const range = require('../range')

describe('list/tail', () => {
  test('tail of array', () => {
    const expected = [ 2, 3 ]
    const actual = tail([ 1, 2, 3 ])

    expect(actual).toEqual(expected)
  })

  test('tail of range', () => {
    const expected = [ 4, 5, 6 ]
    const actual = tail(range(3)(7))

    expect(actual).toEqual(expected)
  })

  test('tail of null is not supported', () => {
    try {
      tail(null)
    } catch (error) {
      expect(error.message).toBe('type object is not supported')
    }
  })

  test('tail of object is not supported', () => {
    try {
      tail({})
    } catch (error) {
      expect(error.message).toBe('type object is not supported')
    }
  })
})
