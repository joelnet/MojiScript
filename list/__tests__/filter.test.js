const filter = require("../filter")

describe("list/filter", () => {
  const isOdd = num => num % 2 !== 0
  const asyncIsOdd = num => Promise.resolve(num).then(isOdd)

  test("sync filters", () => {
    const expected = [1, 3]
    const actual = filter(isOdd)([1, 2, 3])
    expect(actual).toMatchObject(expected)
  })

  test("async filters", () => {
    expect.assertions(1)
    const expected = [1, 3]
    const actual = filter(asyncIsOdd)([1, 2, 3])
    return expect(actual).resolves.toMatchObject(expected)
  })
})
