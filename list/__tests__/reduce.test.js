const reduce = require("../reduce")

describe("list/reduce", () => {
  const add = x => y => x + y
  const asyncAdd = x => y => Promise.resolve(x).then(add(y))
  function* iterator() {
    yield 1
    yield 2
    yield 3
  }

  test("sync array", () => {
    const expected = 6
    const actual = reduce(add)(0)([1, 2, 3])
    expect(actual).toBe(expected)
  })

  test("async array", () => {
    expect.assertions(1)
    const expected = 6
    const actual = reduce(asyncAdd)(0)([1, 2, 3])
    return expect(actual).resolves.toBe(expected)
  })

  test("sync iterable", () => {
    const expected = 6
    const actual = reduce(add)(0)(iterator())
    expect(actual).toBe(expected)
  })

  test("async iterable", () => {
    expect.assertions(1)
    const expected = 6
    const actual = reduce(asyncAdd)(0)(iterator())
    return expect(actual).resolves.toBe(expected)
  })
})
