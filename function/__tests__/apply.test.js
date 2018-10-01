const apply = require('../apply')

describe('function/apply', () => {
  const increase = num => num + 1

  test('sync', () => {
    const expected = 888
    const actual = apply (increase) (887)
    expect(actual).toBe(expected)
  })

  test('async', () => {
    const expected = 888
    const actual = apply (increase) (Promise.resolve(887))
    expect(actual).resolves.toBe(expected)
  })
})