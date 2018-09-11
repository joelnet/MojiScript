const template = require('../template')

describe('string/template', () => {
  test('simple template', () => {
    const expected = 'YAY!'
    const func = template`${0}${1}${0}!`
    const actual = func('Y', 'A')
    expect(actual).toBe(expected)
  })

  test('simple template', () => {
    const expected = 'Hello World!'
    const func = template`${0} ${'foo'}!`
    const actual = func('Hello', { foo: 'World' })
    expect(actual).toBe(expected)
  })
})
