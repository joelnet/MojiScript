const Left = require('../Left')
const Right = require('../Right')

const double = x => x * 2
const eitherDouble = x => x === Infinity ? Left('Cannot double Infinity') : Right(double(x))

describe('type/Left', () => {
  test('map', () => {
    expect.assertions(1)
    const expected = 'Left (123)'
    const actual = Left(123).map(double).inspect()
    expect(actual).toBe(expected)
  })

  test('leftMap', () => {
    expect.assertions(1)
    const expected = 'Left (246)'
    const actual = Left(123).leftMap(double).inspect()
    expect(actual).toBe(expected)
  })

  test('flatMap', () => {
    expect.assertions(1)
    const expected = 'Left (123)'
    const actual = Left(123).flatMap(eitherDouble).inspect()
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
})
