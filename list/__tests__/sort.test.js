const sort = require("../sort")
const range = require("../range")

describe("list/sort", () => {
  const descending = a => b => b - a
  const ascending = a => b => a - b
  function* iterator() {
    yield 5
    yield 2
    yield 3
  }

  test("sort range ascending", () => {
    const expected = [5, 6, 7, 8, 9]
    const actual = sort(ascending) (range (5) (10))

    expect(actual).toEqual(expected)
  })

  test("sort array ascending", () => {
    const expected = [5, 6, 7, 8, 9]
    var actual = sort(ascending) ([5, 6, 7, 8, 9])

    expect(actual).toEqual(expected)
  })

  test("sort iterable ascending", () => {
    const expected = [2, 3, 5]
    var actual = sort(ascending) (iterator())

    expect(actual).toEqual(expected)
  })

  test("sort range descending", () => {
    const expected = [9, 8, 7, 6, 5]
    var actual = sort(descending) (range (5) (10))

    expect(actual).toEqual(expected)
  })

  test("sort array descending", () => {
    const expected = [9, 8, 7, 6, 5]
    var actual = sort(descending) ([5, 6, 7, 8, 9])

    expect(actual).toEqual(expected)
  })

  test("sort iterable descending", () => {
    const expected = [5, 3, 2]
    var actual = sort(descending) (iterator())

    expect(actual).toEqual(expected)
  })
})
