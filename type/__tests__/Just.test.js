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

  test('inspect', () => {
    expect.assertions(1)
    const expected = 'Just ("abc")'
    const actual = Just('abc').inspect()
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
})
