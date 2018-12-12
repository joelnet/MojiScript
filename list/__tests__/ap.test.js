const ap = require('../ap')

describe('list/ap', () => {
  describe('Array', () => {
    const expected = [ 1, 2, 3, 4, 5, 1, 16, 81, 256, 625 ]
    const actual = ap([ Math.sqrt, x => x * x ])([ 1, 4, 9, 16, 25 ])
    expect(actual).toEqual(expected)
  })

  describe('Functor', () => {
    const monad = value => ({
      value,
      flatMap: func => func(value),
      map: func => monad(func(value))
    })

    test('ap', () => {
      const expected = 888
      const double = num => num * 2
      const fDouble = monad(double)
      const value = monad(444)
      const actual = ap(fDouble)(value).value
      expect(actual).toBe(expected)
    })
  })
})
