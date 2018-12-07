const head = require('../head')
const range = require('../range')

describe('list/head', () => {
  test('head of array', () => {
    expect.assertions(1)
    const expected = 1
    const actual = head([ 1, 2, 3 ])

    expect(actual).toBe(expected)
  })

  test('head of range', () => {
    expect.assertions(1)
    const expected = 3
    const actual = head(range(3)(6))

    expect(actual).toBe(expected)
  })

  test('head of null is not supported', () => {
    expect.assertions(1)
    const expected = Error('type object is not supported')
    const actual = () => head(null)
    expect(actual).toThrow(expected)
  })

  test('head of object is not supported', () => {
    expect.assertions(1)
    const expected = Error('type object is not supported')
    const actual = () => head({})
    expect(actual).toThrow(expected)
  })
})
