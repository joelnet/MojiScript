const signature = require('../_internal/debug/signature')
const reduce = require('./reduce')
const call = require('../_internal/call')

const flatMapReducer = func => acc => x => call(val => acc.concat(val))(func(x))
const isFlatMapable = mapable => mapable && typeof mapable.flatMap === 'function'
const isFlFlatMapable = mapable => mapable && typeof mapable['fantasy-land/chain'] === 'function'

const flatMap = func => mapable =>
  isFlatMapable(mapable) ? mapable.flatMap(func)
  : isFlFlatMapable(mapable) ? mapable['fantasy-land/chain'](func)
  : reduce(flatMapReducer(func))([])(mapable)

module.exports = flatMap

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('flatMap :: Function -> FlatMapable -> Any')(flatMap)
}
