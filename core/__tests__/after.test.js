const after = require('../after')

describe('core/after', () => {
  test('value sent to f', async () => {
    expect.assertions(1)
    const expected = 888
    const f = jest.fn()
    const g = jest.fn()
    await after (f) (g) (expected)
    const actual = f.mock.calls[0][0]
    expect(actual).toBe(expected)
  })

  test('value sent to g', async () => {
    expect.assertions(1)
    const expected = 888
    const f = jest.fn()
    const g = jest.fn()
    await after (f) (g) (expected)
    const actual = g.mock.calls[0][0]
    expect(actual).toBe(expected)
  })

  test('returns g(x)', async () => {
    expect.assertions(1)
    const expected = 888
    const f = jest.fn()
    const g = x => x * 2
    const actual = after (f) (g) (444)
    expect(actual).resolves.toBe(expected)
  })
})
