const Nothing = require('../Nothing')

describe('type/Nothing', () => {
  test('value prop is set to value', () => {
    expect.assertions(1)
    const expected = false
    const actual = 'value' in Nothing
    expect(actual).toBe(expected)
  })

  test('is immutable', () => {
    expect.assertions(1)
    const expected = false
    const nothing = Nothing
    nothing.value = 666
    const actual = 'value' in nothing
    expect(actual).toBe(expected)
  })

  test('map', () => {
    expect.assertions(1)
    const expected = Nothing
    const nothing = Nothing
    const actual = nothing.map(x => x * 2)
    expect(actual).toBe(expected)
  })

  test('fantasy-land/map', () => {
    expect.assertions(1)
    const expected = Nothing
    const nothing = Nothing
    const actual = nothing['fantasy-land/map'](x => x * 2)
    expect(actual).toBe(expected)
  })

  test('toString', () => {
    expect.assertions(1)
    const expected = 'Nothing'
    const actual = Nothing.toString()
    expect(actual).toBe(expected)
  })

  test('@@type', () => {
    expect.assertions(1)
    const expected = 'symbol'
    const actual = typeof Nothing['@@type']
    expect(actual).toBe(expected)
  })
})
