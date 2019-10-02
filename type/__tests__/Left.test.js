const Left = require('../Left')
const Right = require('../Right')

const double = x => x * 2
const eitherDouble = x => x === Infinity ? Left('Cannot double Infinity') : Right(double(x))

describe('type/Left', () => {
  test('value prop is set to value', () => {
    expect.assertions(1)
    const expected = 888
    const actual = Left(888).value
    expect(actual).toBe(expected)
  })

  test('is immutable', () => {
    expect.assertions(1)
    const expected = 888
    const left = Left(888)
    left.value = 666
    const actual = left.value
    expect(actual).toBe(expected)
  })

  test('map', () => {
    expect.assertions(1)
    const expected = 'Left (123)'
    const actual = Left(123).map(double).inspect()
    expect(actual).toBe(expected)
  })

  test('tap', () => {
    expect.assertions(1)
    const expected = 'Left (123)'
    const actual = Left(123).tap(double).inspect()
    expect(actual).toBe(expected)
  })

  test('flatMap With Number', () => {
    expect.assertions(1)
    const expected = 'Left (123)'
    const actual = Left(123).flatMap(eitherDouble).inspect()
    expect(actual).toBe(expected)
  })

  test('flatMap With String', () => {
    expect.assertions(1)
    const expected = 'Left ("abc")'
    const actual = Left('abc').flatMap().inspect()
    expect(actual).toBe(expected)
  })

  test('flatMap returns Left', () => {
    expect.assertions(1)
    const expected = 'Left (123)'
    const actual = Left(123).flatMap(() => 888).inspect()
    expect(actual).toBe(expected)
  })

  test('leftMap', () => {
    expect.assertions(1)
    const expected = 'Left (246)'
    const actual = Left(123).leftMap(double).inspect()
    expect(actual).toBe(expected)
  })

  test('leftFlatMap with number', () => {
    expect.assertions(1)
    const expected = 'Right (246)'
    const actual = Left(123).leftFlatMap(eitherDouble).inspect()
    expect(actual).toBe(expected)
  })

  test('leftFlatMap with Infinity', () => {
    expect.assertions(1)
    const expected = 'Left ("Cannot double Infinity")'
    const actual = Left(Infinity).leftFlatMap(eitherDouble).inspect()
    expect(actual).toBe(expected)
  })

  test('leftFlatMap with undefined', () => {
    expect.assertions(1)
    const expected = undefined
    const actual = Left(Infinity).leftFlatMap(() => undefined)
    expect(actual).toBe(expected)
  })

  test('fantasy-land/map', () => {
    expect.assertions(1)
    const expected = 'Left (123)'
    const actual = Left(123)['fantasy-land/map'](double).inspect()
    expect(actual).toBe(expected)
  })

  test('ap', () => {
    expect.assertions(1)
    const expected = 'Left (123)'
    const actual = Left(123).ap().inspect()
    expect(actual).toBe(expected)
  })

  test('Left(abc).inspect', () => {
    expect.assertions(1)
    const expected = 'Left ("abc")'
    const actual = Left('abc').inspect()
    expect(actual).toEqual(expected)
  })

  test('Left(function()).inspect', () => {
    expect.assertions(1)
    const expected = 'Left (function ())'
    const actual = Left(() => {}).inspect()
    expect(actual).toEqual(expected)
  })

  test('Left(Error).inspect', () => {
    expect.assertions(1)
    const expected = 'Left ([ Error: UH OH ])'
    const actual = Left(Error('UH OH')).inspect()
    expect(actual).toEqual(expected)
  })

  test('Left(add()).inspect', () => {
    expect.assertions(1)
    const add = () => {}
    const expected = 'Left (function add())'
    const actual = Left(add).inspect()
    expect(actual).toEqual(expected)
  })

  test('@@type', () => {
    expect.assertions(1)
    const expected = Left['@@type']
    const actual = Left(888)['@@type']
    expect(actual).toBe(expected)
  })
})
