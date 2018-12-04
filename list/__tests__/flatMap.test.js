const flatMap = require('../flatMap')

describe('flatMap', () => {
  const double = x => x * 2

  describe('Functor', () => {
    test('flatMap on Functor', () => {
      const expected = 888
      const Functor = {
        flatMap: func => func(444)
      }
      const actual = flatMap(double)(Functor)
      expect(actual).toBe(expected)
    })

    test('fantasy-land/chain on Functor', () => {
      const expected = 888
      const Functor = {
        'fantasy-land/chain': func => func(444)
      }
      const actual = flatMap(double)(Functor)
      expect(actual).toBe(expected)
    })
  })

  describe('Array', () => {
    test('basic flatMap with numbers', () => {
      const expected = [ 2, 4, 6, 8 ]
      const array = [ 1, 2, 3, 4 ]
      const actual = flatMap(x => [ double(x) ])(array)
      expect(actual).toEqual(expected)
    })

    test('basic flatMap strings', () => {
      const expected = [ 'it\'s', 'Sunny', 'in', '', 'California' ]
      const array = [ 'it\'s Sunny in', '', 'California' ]
      const actual = flatMap(x => x.split(' '))(array)
      expect(actual).toEqual(expected)
    })

    test('async', () => {
      expect.assertions(1)
      const expected = [ 2, 4, 6, 8 ]
      const array = [ 1, 2, 3, 4 ]
      const actual = flatMap(x => Promise.resolve(x).then(x => [ double(x) ]))(array)
      return expect(actual).resolves.toEqual(expected)
    })
  })
})
