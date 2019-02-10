const pipe = require('../index')

describe('core/pipe', () => {
  test('no arguments throws error', () => {
    expect.assertions(1)
    const actual = () => pipe()
    const expected = Error('pipe requires at least one argument')
    return expect(actual).toThrow(expected)
  })

  test('async argument is primitive returns value', () => {
    expect.assertions(1)
    const actual = pipe([ Promise.resolve(888) ])(666)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test('async argument returns last value', () => {
    expect.assertions(1)
    const actual = pipe([ Promise.resolve(666), 888 ])(-1)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test('async executes function', () => {
    expect.assertions(1)
    const actual = pipe([ () => Promise.resolve(), () => 888 ])(-1)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test('Promise as value', () => {
    expect.assertions(1)
    const actual = pipe([ Promise.resolve(888) ])(-1)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test('function returns a Promise', () => {
    expect.assertions(1)
    const actual = pipe([ () => Promise.resolve(888) ])(-1)
    const expected = 888
    return expect(actual).resolves.toBe(expected)
  })

  test('async exception throws', () => {
    expect.assertions(1)
    const actual = pipe([
      () => Promise.resolve(),
      () => { throw Error('Catch me if you can!') }
    ])(-1)
    const expected = Error('Catch me if you can!')
    return expect(actual).rejects.toThrow(expected)
  })

  test('reject value rejects', () => {
    expect.assertions(1)
    const actual = pipe([ () => Promise.reject(Error('Catch me if you can!')) ])(-1)
    const expected = Error('Catch me if you can!')
    return expect(actual).rejects.toThrow(expected)
  })

  test('reject rejects', () => {
    expect.assertions(1)
    const actual = pipe([ () => Promise.reject(Error('Catch me if you can!')) ])(-1)
    const expected = Error('Catch me if you can!')
    return expect(actual).rejects.toThrow(expected)
  })
})
