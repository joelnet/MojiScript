const actualAxios = require('axios')
const axios = require('../axios')

describe('net/axios', () => {
  beforeEach(() => {
    jest.spyOn(actualAxios, 'get').mockImplementation(() => {})
    jest.spyOn(actualAxios, 'delete').mockImplementation(() => {})
    jest.spyOn(actualAxios, 'head').mockImplementation(() => {})
    jest.spyOn(actualAxios, 'options').mockImplementation(() => {})
    jest.spyOn(actualAxios, 'post').mockImplementation(() => {})
    jest.spyOn(actualAxios, 'put').mockImplementation(() => {})
    jest.spyOn(actualAxios, 'patch').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('get', () => {
    const expected = [[1, 2]]
    axios.get (1) (2)
    const actual = actualAxios.get.mock.calls
    expect(actual).toMatchObject(expected)
  })

  test('delete', () => {
    const expected = [[1, 2]]
    axios.delete (1) (2)
    const actual = actualAxios.delete.mock.calls
    expect(actual).toMatchObject(expected)
  })

  test('head', () => {
    const expected = [[1, 2]]
    axios.head (1) (2)
    const actual = actualAxios.head.mock.calls
    expect(actual).toMatchObject(expected)
  })

  test('options', () => {
    const expected = [[1, 2]]
    axios.options (1) (2)
    const actual = actualAxios.options.mock.calls
    expect(actual).toMatchObject(expected)
  })

  test('post', () => {
    const expected = [[1, 2, 3]]
    axios.post (1) (2) (3)
    const actual = actualAxios.post.mock.calls
    expect(actual).toMatchObject(expected)
  })

  test('put', () => {
    const expected = [[1, 2, 3]]
    axios.put (1) (2) (3)
    const actual = actualAxios.put.mock.calls
    expect(actual).toMatchObject(expected)
  })

  test('patch', () => {
    const expected = [[1, 2, 3]]
    axios.patch (1) (2) (3)
    const actual = actualAxios.patch.mock.calls
    expect(actual).toMatchObject(expected)
  })
})
