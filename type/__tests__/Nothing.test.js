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

  test('flatMap', () => {
    expect.assertions(1)
    const expected = Nothing
    const nothing = Nothing
    const actual = nothing.flatMap(() => 666)
    expect(actual).toBe(expected)
  })

  test('leftMap with String', () => {
    expect.assertions(1)
    const expected = 'Just ("ABC")'
    const nothing = Nothing
    const actual = nothing.leftMap(() => 'ABC').inspect()
    expect(actual).toBe(expected)
  })

  test('leftMap with Nothing', () => {
    expect.assertions(1)
    const expected = Nothing
    const nothing = Nothing
    const actual = nothing.leftMap(() => Nothing).value
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
    const expected = ''
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

  test('has value key', () => {
    expect.assertions(1)
    const expected = [ 'value' ]
    const actual = Object.keys(Nothing)
    expect(actual).toEqual(expected)
  })

  test('Number(Nothing) returns 0', () => {
    expect.assertions(1)
    const expected = 0
    const actual = Number(Nothing)
    expect(actual).toBe(expected)
  })

  test('Nothing.ap returns Nothing', () => {
    expect.assertions(1)
    const expected = Nothing
    const double = x => x * 2
    const actual = Nothing.ap(double)
    expect(actual).toBe(expected)
  })
})
