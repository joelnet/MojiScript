const liftA2 = require('../liftA2')
const Just = require('../../type/Just')
const Nothing = require('../../type/Nothing')

describe('function/liftA2', () => {
  const add = liftA2(x => y => x + y)

  test('Just + Just', () => {
    const expected = Just(888)
    const actual = add(Just(333))(Just(555))
    expect(actual).toEqual(expected)
  })

  test('Nothing + Just', () => {
    const expected = Nothing
    const actual = add(Nothing)(Just(555))
    expect(actual).toEqual(expected)
  })

  test('Just + Nothing', () => {
    const expected = Nothing
    const actual = add(Just(333))(Nothing)
    expect(actual).toEqual(expected)
  })
})
