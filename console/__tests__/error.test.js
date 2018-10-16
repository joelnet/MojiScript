const error = require('../error')

describe('console/error', () => {
  beforeEach(() => jest.spyOn(global.console, 'error').mockImplementation(() => {}))
  afterEach(() => global.console.error.mockReset())

  test('calls console.error', () => {
    const expected = 888
    error(expected)
    const actual = global.console.error.mock.calls[0][0]
    expect(actual).toBe(expected)
  })

  test('returns original value', () => {
    const expected = 888
    const actual = error(expected)
    expect(actual).toBe(expected)
  })
})
