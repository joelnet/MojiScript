const $ = require('../template')

describe('string/template', () => {
  const list = [
    { foo: 'World' },
    { foo: 'Sunshine' }
  ]

  test('no args template', () => {
    const expected = '!'
    const func = $`${0}!`
    const actual = func()
    expect(actual).toBe(expected)
  })

  test('simple template', () => {
    const expected = 'YAY!'
    const func = $`${0}${1}${0}!`
    const actual = func('Y', 'A')
    expect(actual).toBe(expected)
  })

  test('multiple template', () => {
    const expected = 'Hello World!'
    const func = $`${1} ${'foo'}!`
    const actual = func({ foo: 'World' }, 'Hello')
    expect(actual).toBe(expected)
  })

  test('map template', () => {
    const expected = [
      'Hello World @ index 0!',
      'Hello Sunshine @ index 1!'
    ]
    const tem = $`Hello ${'foo'} @ index ${1}!`
    const actual = list.map(tem)
    expect(actual).toMatchObject(expected)
  })
})
