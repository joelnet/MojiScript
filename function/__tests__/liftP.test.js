const liftP = require('../liftP')

describe('liftP', () => {
  const increase = num => num + 1
  const add = x => y => x + y

  test('throws Error with arity < 1', () => {
    expect.assertions(1)
    const expected = Error('arity must be >= 1')
    const actual = () => liftP(0)
    expect(actual).toThrowError(expected)
  })

  test('1 arity function is lifted', () => {
    expect.assertions(1)
    const expected = 4
    const actual = liftP(1)(increase)(Promise.resolve(3))
    return expect(actual).resolves.toBe(expected)
  })

  test('2 arity function is lifted', () => {
    expect.assertions(1)
    const expected = 7
    const actual = liftP(2)(add)(Promise.resolve(3))(Promise.resolve(4))
    return expect(actual).resolves.toBe(expected)
  })

  test('liftP works without Promises too', () => {
    expect.assertions(1)
    const expected = 7
    const actual = liftP(2)(add)(Promise.resolve(3))(4)
    return expect(actual).resolves.toBe(expected)
  })
})
