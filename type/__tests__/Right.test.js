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
    const expected = 246
    const actual = Right(123).map(double).value
    expect(actual).toBe(expected)
  })

  test('tap', () => {
    expect.assertions(1)
    const expected = 888
    const actual = Right(888).tap(double).value
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

  test('ap', () => {
    expect.assertions(1)
    const expected = 'Right (246)'
    const actual = Right(x => x * 2).ap(Right(123)).inspect()
    expect(actual).toBe(expected)
  })

  test('getOrElse', () => {
    expect.assertions(1)
    const expected = 888
    const actual = Right(888).getOrElse(123)
    expect(actual).toBe(expected)
  })

  test('getValue', () => {
    expect.assertions(1)
    const expected = 888
    const actual = Right(expected).getValue(() => 123, data => data)
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

  test('Right(function()).inspect', () => {
    expect.assertions(1)
    const expected = 'Right ([ Error: UH OH ])'
    const actual = Right(Error('UH OH')).inspect()
    expect(actual).toEqual(expected)
  })

  test('Right(add()).inspect', () => {
    expect.assertions(1)
    const add = () => {}
    const expected = 'Right (function add())'
    const actual = Right(add).inspect()
    expect(actual).toEqual(expected)
  })

  test('@@type', () => {
    expect.assertions(1)
    const expected = Right['@@type']
    const actual = Right(888)['@@type']
    expect(actual).toBe(expected)
  })
})
