const axios = require('axios')
const { sign } = require('../_internal/debug/notarize')

module.exports.get = url => options => axios.get(url, options)
module.exports.delete = url => options => axios.delete(url, options)
module.exports.head = url => options => axios.head(url, options)
module.exports.options = url => options => axios.options(url, options)
module.exports.post = url => data => options => axios.post(url, data, options)
module.exports.put = url => data => options => axios.put(url, data, options)
module.exports.patch = url => data => options => axios.patch(url, data, options)

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports.get = sign('get :: String -> Object -> Any')(module.exports.get)
  module.exports.delete = sign('delete :: String -> Object -> Any')(module.exports.delete)
  module.exports.head = sign('head :: String -> Object -> Any')(module.exports.head)
  module.exports.options = sign('head :: String -> Object -> Any')(module.exports.options)
  module.exports.post = sign('post :: String -> Object -> Object -> Any')(module.exports.post)
  module.exports.put = sign('put :: String -> Object -> Object -> Any')(module.exports.put)
  module.exports.patch = sign('patch :: String -> Object -> Object -> Any')(module.exports.patch)
}
