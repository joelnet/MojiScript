const reduce = require("../reduce")

describe("list/reduce", () => {
  const add = x => y => x + y
  const asyncAdd = x => y => Promise.resolve(x).then(add(y))

  test("sync reduces", () => {
    const expected = 6
    const actual = reduce(add)(0)([1, 2, 3])
    expect(actual).toBe(expected)
  })

  test("async reduces", () => {
    expect.assertions(1)
    const expected = 6
    const actual = reduce(asyncAdd)(0)([1, 2, 3])
    return expect(actual).resolves.toBe(expected)
  })
})
