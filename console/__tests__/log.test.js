const log = require('../log')

describe('console/log', () => {
  beforeEach(() => jest.spyOn(global.console, 'log').mockImplementation(() => {}))
  afterEach(() => global.console.log.mockReset())

  test('calls console.log', () => {
    const expected = 888
    log (expected)
    const actual = global.console.log.mock.calls[0][0]
    expect(actual).toBe(expected)
  })

  test('returns original value', () => {
    const expected = 888
    const actual = log (expected)
    expect(actual).toBe(expected)
  })
})
