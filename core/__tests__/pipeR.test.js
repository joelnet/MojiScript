const pipeR = require('../pipeR')

describe('core/pipeR', () => {
  test('afd', () => {
    const expected = 10
    const func = pipeR(next => [
      num => num < 10 ? next(num + 1) : num
    ])

    const actual = func(0)
    expect(actual).resolves.toBe(expected)
  })
})
