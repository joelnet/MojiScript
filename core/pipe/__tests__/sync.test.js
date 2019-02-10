const pipeSync = require('../sync')

describe('core/pipe', () => {
  test('no arguments throws error', () => {
    expect.assertions(1)
    const actual = () => pipeSync()
    const expected = Error('pipe/sync requires at least one argument')
    return expect(actual).toThrow(expected)
  })

  test('sync argument is primitive returns value', () => {
    expect.assertions(1)
    const actual = pipeSync([ 888 ])(666)
    const expected = 888
    return expect(actual).toBe(expected)
  })

  test('sync argument returns last value', () => {
    expect.assertions(1)
    const actual = pipeSync([ 666, 888 ])(-1)
    const expected = 888
    return expect(actual).toBe(expected)
  })

  test('sync executes function', () => {
    expect.assertions(1)
    const actual = pipeSync([ () => 888 ])(-1)
    const expected = 888
    return expect(actual).toBe(expected)
  })

  test('sync exception rejects', () => {
    expect.assertions(1)
    const actual = () => pipeSync([ () => {
      throw Error('Catch me if you can!')
    } ])(-1)
    const expected = Error('Catch me if you can!')
    return expect(actual).toThrow(expected)
  })
})
