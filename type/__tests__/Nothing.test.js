const Nothing = require('../Nothing')

describe('type/Nothing', () => {
  test('is immutable', () => {
    expect.assertions(1)
    const expected = null
    const nothing = Nothing
    nothing.value = 666
    const actual = nothing.value
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

  test('inspect', () => {
    expect.assertions(1)
    const expected = 'Nothing'
    const actual = Nothing.inspect()
    expect(actual).toEqual(expected)
  })

  test('toJSON', () => {
    expect.assertions(1)
    const expected = 'null'
    const actual = JSON.stringify(Nothing)
    expect(actual).toEqual(expected)
  })

  test('@@type', () => {
    expect.assertions(1)
    const expected = 'symbol'
    const actual = typeof Nothing['@@type']
    expect(actual).toBe(expected)
  })

  test('has no keys', () => {
    expect.assertions(1)
    const expected = []
    const actual = Object.keys(Nothing)
    expect(actual).toEqual(expected)
  })
})
