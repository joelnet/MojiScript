
const axios = require('axios')

module.exports = {
  get: url => options => axios.get(url, options),
  delete: url => options => axios.delete(url, options),
  head: url => options => axios.head(url, options),
  options: url => options => axios.options(url, options),
  post: url => data => options => axios.post(url, data, options),
  put: url => data => options => axios.put(url, data, options),
  patch: url => data => options => axios.patch(url, data, options)
}
