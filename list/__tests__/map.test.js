const map = require("../map")

describe("list/map", () => {
  const double = num => num * 2
  const asyncDouble = num => Promise.resolve(num).then(double)

  test("sync map", () => {
    expect.assertions(1)
    const expected = [2, 4, 6]
    const actual = map(double)([1, 2, 3])
    expect(actual).toMatchObject(expected)
  })

  test("async maps", () => {
    expect.assertions(1)
    const expected = [2, 4, 6]
    const actual = map(asyncDouble)([1, 2, 3])
    return expect(actual).resolves.toMatchObject(expected)
  })
})
