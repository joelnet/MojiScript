const run = require('../run')

describe('core/run', () => {
  test('runs main with no state', () => {
    const expected = undefined
    const main = jest.fn().mockImplementation(() => Promise.resolve())
    run({ main })
    const actual = main.mock.calls[0][0]
    return expect(actual).toBe(expected)
  })

  test('with no state returns value', () => {
    expect.assertions(1)
    const expected = 888
    const main = jest.fn().mockImplementation(() => Promise.resolve(expected))
    const actual = run({ main })
    return expect(actual).resolves.toBe(expected)
  })

  test('with options returns value', () => {
    expect.assertions(1)
    const expected = 888
    const state = expected
    const main = jest.fn().mockImplementation(s => Promise.resolve(s))
    const actual = run({ state, main })
    return expect(actual).resolves.toBe(expected)
  })

  test('with dependencies sets dependencies', () => {
    expect.assertions(1)
    const expected = 888
    const dependencies = expected
    const main = jest.fn().mockImplementation(
      () => jest.fn().mockImplementation(() => Promise.resolve())
    )
    run({ dependencies, main })
    const actual = main.mock.calls[0][0]
    return expect(actual).toBe(expected)
  })

  test('with dependencies and state sets state', () => {
    expect.assertions(1)
    const expected = 888
    const state = expected
    const dependencies = 8
    const main = jest.fn().mockImplementation(() => Promise.resolve(expected))
    const deps = jest.fn().mockImplementation(() => main)
    run({ dependencies, state, main: deps })
    const actual = main.mock.calls[0][0]
    return expect(actual).toBe(expected)
  })

  test('with dependencies and options returns value', () => {
    expect.assertions(1)
    const expected = 888
    const state = expected
    const dependencies = 8
    const main = jest.fn().mockImplementation(s => Promise.resolve(s))
    const deps = jest.fn().mockImplementation(() => main)
    const actual = run({ dependencies, state, main: deps })
    return expect(actual).resolves.toBe(expected)
  })
})
