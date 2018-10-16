const head = require('../head')
const range = require('../range')

describe('list/head', () => {
  test('head of array', () => {
    const expected = 1
    const actual = head([ 1, 2, 3 ])

    expect(actual).toBe(expected)
  })

  test('head of range', () => {
    const expected = 3
    const actual = head(range(3)(6))

    expect(actual).toBe(expected)
  })

  test('head of null is not supported', () => {
    try {
      head(null)
    } catch (error) {
      expect(error.message).toBe('type object is not supported')
    }
  })

  test('head of object is not supported', () => {
    try {
      head({})
    } catch (error) {
      expect(error.message).toBe('type object is not supported')
    }
  })
})
