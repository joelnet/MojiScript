const Just = require('../Just')
const Nothing = require('../Nothing')

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
    const actual = Just(444).map(x => x * 2).value
    expect(actual).toBe(expected)
  })

  test('flatMap With String', () => {
    expect.assertions(1)
    const expected = 'Just ("ABC")'
    const actual = Just('abc').flatMap(s => typeof s === 'string' ? Just(s.toUpperCase()) : Nothing).inspect()
    expect(actual).toBe(expected)
  })

  test('flatMap With Number', () => {
    expect.assertions(1)
    const expected = Nothing
    const actual = Just(123).flatMap(s => typeof s === 'string' ? Just(s.toUpperCase()) : Nothing)
    expect(actual).toBe(expected)
  })

  test('flatMap returns value', () => {
    expect.assertions(1)
    const expected = 888
    const actual = Just(123).flatMap(() => 888)
    expect(actual).toBe(expected)
  })

  test('flatMap returns undefined', () => {
    expect.assertions(1)
    const expected = undefined
    const actual = Just(123).flatMap(() => undefined)
    expect(actual).toBe(expected)
  })

  test('leftMap', () => {
    expect.assertions(1)
    const expected = 'Just ("abc")'
    const actual = Just('abc').leftMap(s => typeof s === 'string' ? Just(s.toUpperCase()) : Nothing).inspect()
    expect(actual).toBe(expected)
  })

  test('fantasy-land/map', () => {
    expect.assertions(1)
    const expected = 888
    const actual = Just(444)['fantasy-land/map'](x => x * 2).value
    expect(actual).toBe(expected)
  })

  test('Just(888).toString', () => {
    expect.assertions(1)
    const expected = '888'
    const actual = Just(888).toString()
    expect(actual).toBe(expected)
  })

  test('Just(abc).toString', () => {
    expect.assertions(1)
    const expected = 'abc'
    const actual = Just('abc').toString()
    expect(actual).toBe(expected)
  })

  test('Just(abc).inspect', () => {
    expect.assertions(1)
    const expected = 'Just ("abc")'
    const actual = Just('abc').inspect()
    expect(actual).toEqual(expected)
  })

  test('Just(function()).inspect', () => {
    expect.assertions(1)
    const expected = 'Just (function ())'
    const actual = Just(() => {}).inspect()
    expect(actual).toEqual(expected)
  })

  test('Just(add()).inspect', () => {
    expect.assertions(1)
    const add = () => {}
    const expected = 'Just (function add())'
    const actual = Just(add).inspect()
    expect(actual).toEqual(expected)
  })

  test('toJSON', () => {
    expect.assertions(1)
    const expected = '"abc"'
    const actual = JSON.stringify(Just('abc'))
    expect(actual).toEqual(expected)
  })

  test('@@type', () => {
    expect.assertions(1)
    const expected = Just['@@type']
    const actual = Just(888)['@@type']
    expect(actual).toBe(expected)
  })

  test('cast to string', () => {
    expect.assertions(1)
    const expected = 'a'
    const actual = `${Just('a')}`
    expect(actual).toBe(expected)
  })

  test('append strings', () => {
    expect.assertions(1)
    const expected = 'ab'
    const actual = Just('a') + Just('b')
    expect(actual).toBe(expected)
  })

  test('Number(Just()) returns number', () => {
    expect.assertions(1)
    const expected = 3
    const actual = Number(Just(3))
    expect(actual).toBe(expected)
  })

  test('when map returns undefined return undefined', () => {
    expect.assertions(1)
    const expected = Just(undefined)
    const actual = Just(666).map(() => undefined)
    expect(actual).toEqual(expected)
  })

  test('Just.ap', () => {
    expect.assertions(1)
    const expected = Just(888)
    const double = x => x * 2
    const actual = Just(double).ap(Just(444))
    expect(actual).toMatchObject(expected)
  })
})
