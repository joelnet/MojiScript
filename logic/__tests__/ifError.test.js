const ifError = require('../ifError')

describe('core/ifError', () => {
  describe('synchronous', () => {
    test('success calls success', () => {
      const expected = 888
      const mockSuccess = jest.fn()
      ifError(x => x)(() => null)(mockSuccess)(expected)
      const actual = mockSuccess.mock.calls[0][0]
      expect(actual).toBe(expected)
    })

    test('fail calls error', () => {
      const expected = new Error('888')
      const mockError = jest.fn()
      ifError((x) => { throw new Error(x) })(mockError)(() => null)(888)
      const actual = mockError.mock.calls[0][0]
      expect(actual).toMatchObject(expected)
    })

    test('success returns success value', () => {
      const expected = 888
      const actual = ifError(x => x)(() => null)(x => x)(expected)
      expect(actual).toBe(expected)
    })

    test('fails returns error', () => {
      const expected = new Error('888')
      const actual = ifError((x) => { throw new Error(x) })(x => x)(() => null)(888)
      expect(actual).toMatchObject(expected)
    })
  })

  describe('asynchronous', () => {
    test('success calls success', async () => {
      const expected = 888
      const mockSuccess = jest.fn()
      await ifError(x => Promise.resolve(x))(() => null)(mockSuccess)(expected)
      const actual = mockSuccess.mock.calls[0][0]
      expect(actual).toBe(expected)
    })

    test('fail calls error', async () => {
      const expected = 888
      const mockError = jest.fn()
      await ifError(x => Promise.reject(x))(mockError)(() => null)(expected)
      const actual = mockError.mock.calls[0][0]
      expect(actual).toBe(expected)
    })

    test('success resolves onSuccess value', () => {
      const expected = 888
      const actual = ifError(x => Promise.resolve(x))(() => null)(x => x)(expected)
      return expect(actual).resolves.toBe(expected)
    })

    test('fails resolves onError value', () => {
      const expected = { err: 888 }
      const actual = ifError(x => Promise.reject(x))(err => ({ err }))(() => null)(888)
      return expect(actual).resolves.toMatchObject(expected)
    })
  })
})
