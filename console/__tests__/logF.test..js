const logF = require('../logF')

describe('console/logF', () => {
  beforeEach(() => jest.spyOn(global.console, 'log').mockImplementation(() => {}))
  afterEach(() => global.console.log.mockReset())

  const double = x => x * 2

  test('calls console.log', () => {
    const expected = 888
    logF (double) (444)
    const actual = global.console.log.mock.calls[0][0]
    expect(actual).toBe(expected)
  })

  test('returns original value', () => {
    const expected = 888
    const actual = logF (double) (expected)
    expect(actual).toBe(expected)
  })
})
