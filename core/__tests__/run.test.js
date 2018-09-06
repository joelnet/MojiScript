const run = require('../run')

describe('core/run', () => {
  test('runs main with no options', () => {
    const expected = null
    const main = jest.fn().mockImplementation(() => Promise.resolve())
    run({ main })
    const actual = main.mock.calls[0][0]
    return expect(actual).toBe(expected)
  })

  test('with no options returns value', () => {
    expect.assertions(1)
    const expected = 888
    const main = jest.fn().mockImplementation(() => Promise.resolve(expected))
    const actual = run({ main })
    return expect(actual).resolves.toBe(expected)
  })

  test('with options returns value', () => {
    expect.assertions(1)
    const expected = 888
    const options = expected
    const main = jest.fn().mockImplementation(() => Promise.resolve(expected))
    const actual = run({ options, main })
    return expect(actual).resolves.toBe(expected)
  })

  test('with dependencies sets dependencies', () => {
    expect.assertions(1)
    const expected = 888
    const dependencies = expected
    const main = jest.fn().mockImplementation(() => jest.fn().mockImplementation(() => Promise.resolve(expected)))
    run({ dependencies, main })
    const actual = main.mock.calls[0][0]
    return expect(actual).toBe(expected)
  })

  test('with dependencies and options sets options', () => {
    expect.assertions(1)
    const expected = 888
    const options = expected
    const dependencies = 8
    const main = jest.fn().mockImplementation(() => Promise.resolve(expected))
    const deps = jest.fn().mockImplementation(() => main)
    run({ dependencies, options, main: deps })
    const actual = main.mock.calls[0][0]
    return expect(actual).toBe(expected)
  })

  test('with dependencies and options returns value', () => {
    expect.assertions(1)
    const expected = 888
    const options = expected
    const dependencies = 8
    const main = jest.fn().mockImplementation(() => Promise.resolve(expected))
    const deps = jest.fn().mockImplementation(() => main)
    const actual = run({ dependencies, options, main: deps })
    return expect(actual).resolves.toBe(expected)
  })
})
