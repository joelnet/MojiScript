const run = require('../run')

describe('core/run', () => {
  test('runs main with no options', () => {
    const expected = null
    const main = jest.fn()
    run({ main })
    const actual = main.mock.calls[0][0]
    expect(actual).toBe(expected)
  })

  test('with no options returns value', () => {
    const expected = 888
    const main = jest.fn().mockImplementation(() => expected)
    const actual = run({ main })
    expect(actual).toBe(expected)
  })

  test('with options returns value', () => {
    const expected = 888
    const options = expected
    const main = jest.fn().mockImplementation(() => expected)
    const actual = run({ options, main })
    expect(actual).toBe(expected)
  })

  test('with dependencies sets dependencies', () => {
    const expected = 888
    const dependencies = expected
    const main = jest.fn().mockImplementation(() => jest.fn())
    run({ dependencies, main })
    const actual = main.mock.calls[0][0]
    expect(actual).toBe(expected)
  })

  test('with dependencies and options sets options', () => {
    const expected = 888
    const options = expected
    const dependencies = 8
    const main = jest.fn()
    const deps = jest.fn().mockImplementation(() => main)
    run({ dependencies, options, main: deps })
    const actual = main.mock.calls[0][0]
    expect(actual).toBe(expected)
  })

  test('with dependencies and options returns value', () => {
    const expected = 888
    const options = expected
    const dependencies = 8
    const main = jest.fn().mockImplementation(() => expected)
    const deps = jest.fn().mockImplementation(() => main)
    const actual = run({ dependencies, options, main: deps })
    expect(actual).toBe(expected)
  })
})
