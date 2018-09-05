const axios = require('axios')

const STATUS_CODE = {
  OK: 200
}

const parseResponse = response =>
  response.status === STATUS_CODE.OK
    ? Promise.resolve(response.data.results)
    : Promise.reject(`${response.status}: ${response.statusText}`)

module.exports = {
  get: url => config => axios.get(url, config).then(parseResponse),
  'delete': url => config => axios.delete(url, config),
  head: url => config => axios.head(url, config),
  options: url => config => axios.options(url, config),
  post: url => data => config => axios.post(url, data, config),
  put: url => data => config => axios.put(url, data, config),
  patch: url => data => config => axios.put(url, data, config),
}
