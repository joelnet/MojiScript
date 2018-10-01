const tap = require('../tap')

describe('function/tap', () => {
  test('returns original argument', () => {
    const func = () => 666
    const tapped = tap(func)
    const expected = 888
    const actual = tapped(expected)
    expect(actual).toBe(expected)
  })

  test('returns executes function with argument', () => {
    const func = jest.fn()
    const tapped = tap(func)
    const expected = 888
    
    tapped(expected)
    const actual = func.mock.calls[0][0]

    expect(actual).toBe(expected)
  })
})
