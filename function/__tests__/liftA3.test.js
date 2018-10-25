const liftA3 = require('../liftA3')
const Just = require('../../type/Just')
const Nothing = require('../../type/Nothing')

describe('function/liftA2', () => {
  const add = liftA3(x => y => z => x + y + z)

  test('Just + Just + Just', () => {
    const expected = Just(888)
    const actual = add(Just(333))(Just(444))(Just(111))
    expect(actual).toEqual(expected)
  })

  test('Nothing + Just + Just', () => {
    const expected = Nothing
    const actual = add(Nothing)(Just(444))(Just(111))
    expect(actual).toEqual(expected)
  })

  test('Just + Nothing + Just', () => {
    const expected = Nothing
    const actual = add(Just(333))(Nothing)(Just(111))
    expect(actual).toEqual(expected)
  })

  test('Just + Just + Nothing', () => {
    const expected = Nothing
    const actual = add(Just(333))(Just(444))(Nothing)
    expect(actual).toEqual(expected)
  })
})
