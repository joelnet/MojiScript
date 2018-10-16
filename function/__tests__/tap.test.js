const tap = require('../tap')

describe('function/tap', () => {
  test('returns original argument', () => {
    const func = () => 666
    const tapped = tap(func)
    const expected = 888
    const actual = tapped(expected)
    expect(actual).toBe(expected)
  })

  test('async returns original argument', () => {
    const func = () => Promise.resolve(666)
    const tapped = tap(func)
    const expected = 888
    const actual = tapped(expected)
    expect(actual).resolves.toBe(expected)
  })

  test('returns executes function with argument', () => {
    const func = jest.fn()
    const tapped = tap(func)
    const expected = 888

    tapped(expected)
    const actual = func.mock.calls[0][0]

    expect(actual).toBe(expected)
  })

  test('exception bubbles up', () => {
    const expected = Error('Oops')
    const func = () => { throw Error('Oops') }
    const tapped = tap(func)
    const actual = () => tapped(expected)
    expect(actual).toThrowError(expected)
  })

  test('async exception bubbles up', () => {
    const expected = Error('Oops')
    const func = () => Promise.reject(expected)
    const tapped = tap(func)
    const actual = tapped(888)
    expect(actual).rejects.toBe(expected)
  })
})
