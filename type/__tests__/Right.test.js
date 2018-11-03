const Right = require('../Right')
const Left = require('../Left')

const double = x => x * 2
const eitherDouble = x => x === Infinity ? Left('Cannot double Infinity') : Right(double(x))

describe('type/Right', () => {
  test('value prop is set to value', () => {
    expect.assertions(1)
    const expected = 888
    const actual = Right(888).value
    expect(actual).toBe(expected)
  })

  test('is immutable', () => {
    expect.assertions(1)
    const expected = 888
    const right = Right(888)
    right.value = 666
    const actual = right.value
    expect(actual).toBe(expected)
  })

  test('map', () => {
    expect.assertions(1)
    const expected = 'Right (246)'
    const actual = Right(123).map(double).inspect()
    expect(actual).toBe(expected)
  })

  test('flatMap with number', () => {
    expect.assertions(1)
    const expected = 'Right (246)'
    const actual = Right(123).flatMap(eitherDouble).inspect()
    expect(actual).toBe(expected)
  })

  test('flatMap with Infinity', () => {
    expect.assertions(1)
    const expected = 'Left ("Cannot double Infinity")'
    const actual = Right(Infinity).flatMap(eitherDouble).inspect()
    expect(actual).toBe(expected)
  })

  test('leftMap', () => {
    expect.assertions(1)
    const expected = 'Right (123)'
    const actual = Right(123).leftMap(double).inspect()
    expect(actual).toBe(expected)
  })

  test('leftFlatMap', () => {
    expect.assertions(1)
    const expected = 'Right (123)'
    const actual = Right(123).leftFlatMap(eitherDouble).inspect()
    expect(actual).toBe(expected)
  })

  test('fantasy-land/map', () => {
    expect.assertions(1)
    const expected = 'Right (246)'
    const actual = Right(123)['fantasy-land/map'](double).inspect()
    expect(actual).toBe(expected)
  })

  test('Right(888).toString', () => {
    expect.assertions(1)
    const expected = '888'
    const actual = Right(888).toString()
    expect(actual).toBe(expected)
  })

  test('Right(abc).toString', () => {
    expect.assertions(1)
    const expected = 'abc'
    const actual = Right('abc').toString()
    expect(actual).toBe(expected)
  })

  test('Right(abc).inspect', () => {
    expect.assertions(1)
    const expected = 'Right ("abc")'
    const actual = Right('abc').inspect()
    expect(actual).toEqual(expected)
  })

  test('Right(function()).inspect', () => {
    expect.assertions(1)
    const expected = 'Right (function ())'
    const actual = Right(() => {}).inspect()
    expect(actual).toEqual(expected)
  })

  test('Right(add()).inspect', () => {
    expect.assertions(1)
    const add = () => {}
    const expected = 'Right (function add())'
    const actual = Right(add).inspect()
    expect(actual).toEqual(expected)
  })

  test('toJSON', () => {
    expect.assertions(1)
    const expected = '"abc"'
    const actual = JSON.stringify(Right('abc'))
    expect(actual).toEqual(expected)
  })

  test('@@type', () => {
    expect.assertions(1)
    const expected = Right['@@type']
    const actual = Right(888)['@@type']
    expect(actual).toBe(expected)
  })

  test('cast to string', () => {
    expect.assertions(1)
    const expected = 'a'
    const actual = `${Right('a')}`
    expect(actual).toBe(expected)
  })

  test('append strings', () => {
    expect.assertions(1)
    const expected = 'ab'
    const actual = Right('a') + Right('b')
    expect(actual).toBe(expected)
  })

  test('Number(Right()) returns number', () => {
    expect.assertions(1)
    const expected = 3
    const actual = Number(Right(3))
    expect(actual).toBe(expected)
  })
})
