const { parseSignature, sign } = require('../notarize')

describe('_internal/debug/notarize', () => {
  describe('parseSignature', () => {
    test.each([
      [ null, { method: undefined } ],
      [ undefined, { method: undefined } ],
      [ '', { method: undefined } ],
      [ 'invalid', { method: undefined } ],
      [ 'f ::', { method: 'f', args: [], returns: undefined } ],
      [ 'f :: a', { method: 'f', args: [], returns: 'a' } ],
      [ 'f :: a -> b', { method: 'f', args: [ 'a' ], returns: 'b' } ],
      [ 'f :: (a -> b)', { method: 'f', args: [ ], returns: '(a -> b)' } ],
      [ 'f :: a -> (b -> c)', { method: 'f', args: [ 'a' ], returns: '(b -> c)' } ],
      [ 'f :: a -> (b -> c) -> d', { method: 'f', args: [ 'a', '(b -> c)' ], returns: 'd' } ]
    ])(
      '%p returns %p',
      (value, expected) => {
        const actual = parseSignature(value)
        expect(actual).toEqual(expected)
      }
    )
  })

  describe('sign', () => {
    const double = num => num * 2

    test('sets name', () => {
      const expected = 'noop'
      const actual = sign('noop :: undefined')(() => {}).name
      expect(actual).toBe(expected)
    })

    test.each([
      [ 'noop :: undefined' ],
      [ 'func :: Boolean' ],
      [ 'func :: One -> Two' ],
      [ 'func :: One -> (Two -> Three) -> Four' ]
    ])(
      'inspect() returns %p',
      signature => {
        const actual = sign(signature)(double).inspect()
        expect(actual).toBe(signature)
      }
    )

    test('runs correctly - three :: Number', () => {
      const expected = 3
      const actual = sign('three :: Number')(() => 3)()
      expect(actual).toBe(expected)
    })

    test('runs correctly - double :: Number -> Number', () => {
      const expected = 6
      const actual = sign('double :: Number -> Number')(x => x * 2)(3)
      expect(actual).toBe(expected)
    })

    test('runs correctly - add :: Number -> Number -> Number', () => {
      const expected = 7
      const actual = sign('add :: Number -> Number -> Number')(a => b => a + b)(3)(4)
      expect(actual).toBe(expected)
    })
  })
})
