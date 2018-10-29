const signature = require('../_internal/debug/signature')

// join :: [a] -> [a] -> [a]
const join = separator => list => Array.prototype.join.call(list, separator)

module.exports = join

// Experimental debug code
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature({ method: 'join', args: [ '[a]', '[a]' ], returnType: '[a]' })(join)
}
