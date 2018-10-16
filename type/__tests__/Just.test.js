const Just = require('../Just')

describe('type/Just', () => {
  test('value prop is set to value', () => {
    expect.assertions(1)
    const expected = 888
    const actual = Just(888).value
    expect(actual).toBe(expected)
  })

  test('is immutable', () => {
    expect.assertions(1)
    const expected = 888
    const just = Just(888)
    just.value = 666
    const actual = just.value
    expect(actual).toBe(expected)
  })

  test('map', () => {
    expect.assertions(1)
    const expected = 888
    const just = Just(444)
    const actual = just.map(x => x * 2).value
    expect(actual).toBe(expected)
  })

  test('fantasy-land/map', () => {
    expect.assertions(1)
    const expected = 888
    const just = Just(444)
    const actual = just['fantasy-land/map'](x => x * 2).value
    expect(actual).toBe(expected)
  })

  test('toString', () => {
    expect.assertions(1)
    const expected = 'Just (888)'
    const actual = Just(888).toString()
    expect(actual).toBe(expected)
  })

  test('@@type', () => {
    expect.assertions(1)
    const expected = Just['@@type']
    const actual = Just(888)['@@type']
    expect(actual).toBe(expected)
  })
})
