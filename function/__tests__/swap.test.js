const swap = require('../swap')

describe('function/swap', () => {
  test('swaps arguments', () => {
    const func = a => b => `${a}${b}`
    const swapped = swap(func)
    const expected = 'BA'
    const actual = swapped('A')('B')
    expect(actual).toBe(expected)
  })
})
