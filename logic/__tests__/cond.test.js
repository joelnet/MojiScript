const cond = require('../cond')

describe('logic/cond', () => {
  const c = cond([
    [ null, 'null' ],
    [ undefined, 'undefined' ],
    [ 'abc', 'ABC' ],
    [ x => x === '123', 'ONE TWO THREE' ],
    [ x => x[0] === 'h', x => x.toUpperCase() ]
  ])

  test('test with null returns value', () => {
    const expected = 'null'
    const actual = c(null)
    expect(actual).toBe(expected)
  })

  test('test with undefined returns value', () => {
    const expected = 'null'
    const actual = c(null)
    expect(actual).toBe(expected)
  })

  test('test value returns value', () => {
    const expected = 'ABC'
    const actual = c('abc')
    expect(actual).toBe(expected)
  })

  test('test func returns value', () => {
    const expected = 'ONE TWO THREE'
    const actual = c('123')
    expect(actual).toBe(expected)
  })

  test('result computes value', () => {
    const expected = 'HELLO'
    const actual = c('hello')
    expect(actual).toBe(expected)
  })

  test('no match returns null', () => {
    const expected = null
    const actual = c('goodbye')
    expect(actual).toBe(expected)
  })
})
