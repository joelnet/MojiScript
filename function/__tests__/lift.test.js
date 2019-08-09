const lift = require('../lift')
const Just = require('../../type/Just')

describe('function/lift', () => {
  const increase = lift(1)(x => x + 1)
  const add2 = lift(2)(x => y => x + y)

  test('Unknown Type', () => {
    const expected = new Error('Cannot lift unsupported type "object"')
    const actual = () => increase({ unknown: true })
    expect(actual).toThrow(expected)
  })

  test('Mapable', () => {
    const expected = Just(888)
    const actual = increase(Just(887))
    expect(actual).toEqual(expected)
  })

  test('Array', () => {
    const expected = [ 7 ]
    const actual = add2([ 3 ])([ 4 ])
    expect(actual).toMatchObject(expected)
  })

  test('Themable', () => {
    expect.assertions(1)
    const expected = 7
    const actual = add2({ then: r => r(3) })({ then: r => r(4) })
    return expect(actual).resolves.toBe(expected)
  })

  test('Promise', () => {
    expect.assertions(1)
    const expected = 7
    const actual = add2(Promise.resolve(3))(Promise.resolve(4))
    return expect(actual).resolves.toBe(expected)
  })
})
