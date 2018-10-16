const prepend = require('../prepend')

describe('string/prepend', () => {
  test('prepend strings', () => {
    const expected = 'AB'
    const actual = prepend('A')('B')
    expect(actual).toBe(expected)
  })

  test('prepend null as empty string', () => {
    const expected = 'B'
    const actual = prepend('')('B')
    expect(actual).toBe(expected)
  })

  test('prepend to null as empty string', () => {
    const expected = 'A'
    const actual = prepend('A')('')
    expect(actual).toBe(expected)
  })
})
