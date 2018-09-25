const axios = require('../axios')

describe('net/axios', () => {
  test('has functions', () => {
    const expected = ['get', 'delete', 'head', 'options', 'post', 'put', 'patch']
    const actual = Object.keys(axios)
    expect(actual).toMatchObject(expected)
  })
})
