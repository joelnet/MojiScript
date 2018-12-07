const tail = require('../tail')
const range = require('../range')

describe('list/tail', () => {
  test('tail of array', () => {
    expect.assertions(1)
    const expected = [ 2, 3 ]
    const actual = tail([ 1, 2, 3 ])

    expect(actual).toEqual(expected)
  })

  test('tail of range', () => {
    expect.assertions(1)
    const expected = [ 4, 5, 6 ]
    const actual = tail(range(3)(7))

    expect(actual).toEqual(expected)
  })

  test('tail of null is not supported', () => {
    expect.assertions(1)
    const expected = Error('type object is not supported')
    const actual = () => tail(null)
    expect(actual).toThrow(expected)
  })

  test('tail of object is not supported', () => {
    expect.assertions(1)
    const expected = Error('type object is not supported')
    const actual = () => tail({})
    expect(actual).toThrow(expected)
  })
})
