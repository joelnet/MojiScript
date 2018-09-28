const sleep = require('../sleep')

describe('threading/sleep', () => {
  beforeEach(() => jest.spyOn(global, 'setTimeout').mockImplementation(func => func()))
  afterEach(() => global.setTimeout.mockReset())

  test('sleep returns value', () => {
    expect.assertions(1)
    const expected = 888
    const actual = sleep(0)(expected)
    return expect(actual).resolves.toBe(expected)
  })

  test('sleep(100000) calls setTimeout with 100000 milliseconds', () => {
    expect.assertions(1)
    const expected = 1000
    sleep(expected)()
    const actual = global.setTimeout.mock.calls[0][1]
    expect(actual).toBe(expected)
  })
})
