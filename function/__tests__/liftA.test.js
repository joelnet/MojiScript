const liftA = require('../liftA')
const Just = require('../../type/Just')
const Nothing = require('../../type/Nothing')

describe('function/liftA', () => {
  const increase = liftA(1)(x => x + 1)
  const add2 = liftA(2)(x => y => x + y)
  const add3 = liftA(3)(x => y => z => x + y + z)

  test('0 Arity throws', () => {
    const expected = new Error('arity must be >= 1')
    const actual = () => liftA(0)
    expect(actual).toThrow(expected)
  })

  test('Just + 1', () => {
    const expected = Just(888)
    const actual = increase(Just(887))
    expect(actual).toEqual(expected)
  })

  test('Nothing + 1', () => {
    const expected = Nothing
    const actual = increase(Nothing)
    expect(actual).toEqual(expected)
  })

  test('Just + Just', () => {
    const expected = Just(888)
    const actual = add2(Just(333))(Just(555))
    expect(actual).toEqual(expected)
  })

  test('Just + Just + Just', () => {
    const expected = Just(888)
    const actual = add3(Just(333))(Just(333))(Just(222))
    expect(actual).toEqual(expected)
  })

  test('Nothing + Just', () => {
    const expected = Nothing
    const actual = add2(Nothing)(Just(555))
    expect(actual).toEqual(expected)
  })

  test('Just + Nothing', () => {
    const expected = Nothing
    const actual = add2(Just(333))(Nothing)
    expect(actual).toEqual(expected)
  })
})
