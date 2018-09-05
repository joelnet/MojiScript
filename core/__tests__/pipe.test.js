const pipe = require("../pipe")

describe("core/pipe", () => {
  test("no arguments returns promise", () => {
    expect.assertions(1)
    const actual = pipe()()
    const expected = Promise
    return expect(actual).toBeInstanceOf(expected)
  })

  test("argument is primitive returns value", () => {
    expect.assertions(1)
    const actual = pipe(888)(666)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test("argument returns last value", () => {
    expect.assertions(1)
    const actual = pipe(666, 888)(-1)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test("executes function", () => {
    expect.assertions(1)
    const actual = pipe(() => 888)(-1)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test("Promise as value", () => {
    expect.assertions(1)
    const actual = pipe(Promise.resolve(888))(-1)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test("function returns a Promise", () => {
    expect.assertions(1)
    const actual = pipe(() => Promise.resolve(888))(-1)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test("exceptions reject", () => {
    expect.assertions(1)
    const actual = pipe(() => {
      throw Error('Catch me if you can!')
    })(-1)
    const expected = Error('Catch me if you can!')
    return expect(actual).rejects.toThrow(expected)
  })

  test("reject value rejects", () => {
    expect.assertions(1)
    const actual = pipe(() => Promise.reject(Error('Catch me if you can!')))(-1)
    const expected = Error('Catch me if you can!')
    return expect(actual).rejects.toThrow(expected)
  })

  test("reject rejects", () => {
    expect.assertions(1)
    const actual = pipe(() => Promise.reject(Error('Catch me if you can!')))(-1)
    const expected = Error('Catch me if you can!')
    return expect(actual).rejects.toThrow(expected)
  })
})
