const sleep = require('../sleep')

describe('threading/sleep', () => {
  test('sleep returns value', () => {
    expect.assertions(1)
    const expected = 888
    const actual = sleep(0)(expected)
    return expect(actual).resolves.toBe(expected)
  })

  test('sleep(0) executes immediately', () => {
    expect.assertions(1)
    const start = new Date()
    return sleep(0)().then(() => {
      const end = new Date()
      expect(end - start).toBeLessThan(100)
    })
  })

  test('sleep(100) executes later', () => {
    expect.assertions(1)
    const start = new Date()
    return sleep(100)().then(() => {
      const end = new Date()
      expect(end - start).toBeGreaterThanOrEqual(99)
    })
  })
})
