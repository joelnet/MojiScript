const pipe = require("../pipe")

describe("core/pipe", () => {
  test("no arguments returns promise", () => {
    expect.assertions(1)
    const actual = pipe()
    const expected = Promise
    return expect(actual).toBeInstanceOf(expected)
  })

  test("argument is primitive returns value", () => {
    expect.assertions(1)
    const actual = pipe(123)
    const expected = 123
    return expect(actual).resolves.toBe(expected)
  })

  test("argument returns last value", () => {
    expect.assertions(1)
    const actual = pipe(123, 456)
    const expected = 456
    return expect(actual).resolves.toBe(expected)
  })

  test("executes function", () => {
    expect.assertions(1)
    const actual = pipe(() => 123)
    const expected = 123
    return expect(actual).resolves.toBe(expected)
  })

  test("Promise as value", () => {
    expect.assertions(1)
    const actual = pipe(Promise.resolve(123))
    const expected = 123
    return expect(actual).resolves.toBe(expected)
  })

  test("function returns a Promise", () => {
    expect.assertions(1)
    const actual = pipe(() => Promise.resolve(123))
    const expected = 123
    return expect(actual).resolves.toBe(expected)
  })

  test("exceptions reject", () => {
    expect.assertions(1)
    const actual = pipe(() => {
      throw Error('Catch me if you can!')
    })
    const expected = Error('Catch me if you can!')
    return expect(actual).rejects.toThrow(expected)
  })

  test("reject value rejects", () => {
    expect.assertions(1)
    const actual = pipe(() => Promise.reject(Error('Catch me if you can!')))
    const expected = Error('Catch me if you can!')
    return expect(actual).rejects.toThrow(expected)
  })

  test("reject rejects", () => {
    expect.assertions(1)
    const actual = pipe(() => Promise.reject(Error('Catch me if you can!')))
    const expected = Error('Catch me if you can!')
    return expect(actual).rejects.toThrow(expected)
  })
})
