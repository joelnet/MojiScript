const { sign } = require('../_internal/debug/notarize')
const tap = require('../function/tap')

// logF :: Function -> a -> a
const logF = func => tap(x => console.log(func(x))) // eslint-disable-line no-console

module.exports = logF

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = sign('logF :: Function -> a -> a')(logF)
}
