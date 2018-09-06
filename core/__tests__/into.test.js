const into = require('../into')

describe('core/into', () => {
  test('injects into object', () => {
    expect.assertions(1)
    const expected = { one: 1, two: 2 }
    const actual = into('two')(obj => obj.one + 1)({ one: 1 })
    return expect(actual).resolves.toMatchObject(expected)
  })
})
