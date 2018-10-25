const Nothing = require('../Nothing')
const Just = require('../Just')

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
    const actual = nothing.flatMap(s => typeof s === 'string' ? Just (s.toUpperCase()) : Nothing)
    expect(actual).toBe(expected)
  })

  test('leftMap with String', () => {
    expect.assertions(1)
    const expected = "ABC"
    const nothing = Nothing
    const actual = nothing.leftMap(() => Just ('ABC')).toString()
    expect(actual).toBe(expected)
  })

  test('leftMap with Nothing', () => {
    expect.assertions(1)
    const expected = Nothing
    const nothing = Nothing
    const actual = nothing.leftMap(() => Nothing)
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
})
