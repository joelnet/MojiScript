const append = require('../append')

describe('string/append', () => {
  test('appends strings', () => {
    const expected = 'AB'
    const actual = append ('B') ('A')
    expect(actual).toBe(expected)
  })

  test('appends null as empty string', () => {
    const expected = 'A'
    const actual = append ('') ('A')
    expect(actual).toBe(expected)
  })

  test('appends to null as empty string', () => {
    const expected = 'B'
    const actual = append ('B') ('')
    expect(actual).toBe(expected)
  })
})
