const Identity = require('../Identity')

describe('type/Identity', () => {
  test('value prop is set to value', () => {
    expect.assertions(1)
    const expected = 888
    const actual = Identity(888).value
    expect(actual).toBe(expected)
  })

  test('is immutable', () => {
    expect.assertions(1)
    const expected = 888
    const identity = Identity(888)
    identity.value = 666
    const actual = identity.value
    expect(actual).toBe(expected)
  })

  test('map', () => {
    expect.assertions(1)
    const expected = 888
    const identity = Identity(444)
    const actual = identity.map(x => x * 2).value
    expect(actual).toBe(expected)
  })

  test('fantasy-land/map', () => {
    expect.assertions(1)
    const expected = 888
    const identity = Identity(444)
    const actual = identity['fantasy-land/map'](x => x * 2).value
    expect(actual).toBe(expected)
  })

  test('toString', () => {
    expect.assertions(1)
    const expected = 'Identity (888)'
    const actual = Identity(888).toString()
    expect(actual).toBe(expected)
  })

  test('@@type', () => {
    expect.assertions(1)
    const expected = Identity['@@type']
    const actual = Identity(888)['@@type']
    expect(actual).toBe(expected)
  })
})
