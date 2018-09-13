import log from 'mojiscript/console/log'
import main from '../main'

describe ('main.js', () => {
  const dependencies = { log }

  beforeEach (() => jest.spyOn (global.console, 'log').mockImplementation (() => {}))

  afterEach (() => jest.clearAllMocks ())

  test ('main computes values', () => {
    expect.assertions (1)
    const expected = 8
    const state = [1, 2, 3]
    const actual = main (dependencies) (state)
    return expect (actual).resolves.toBe (expected)
  })

  test ('main logs to console', async () => {
    expect.assertions (1)
    const expected = 8
    const state = [1, 2, 3]
    await main (dependencies) (state)
    const actual = global.console.log.mock.calls[0][0]
    expect (actual).toBe (expected)
  })
})
