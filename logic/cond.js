const signature = require('../_internal/debug/signature')
const maybeExec = require('../_internal/maybeExec')
const is = require('../type/is')

const isFunction = is(Function)

const isPass = (test, value) => (isFunction(test) ? test(value) : test === value)

// cond :: Array -> Any -> Any
const cond = pairs => value => {
  for (const pair of pairs) { // eslint-disable-line no-restricted-syntax
    const [ predicate, transformer ] = pair

    if (isPass(predicate, value)) {
      return maybeExec(transformer)(value)
    }
  }

  return null
}

module.exports = cond

// Experimental debug code
/* istanbul ignore next */
if (process.env.MOJI_DEBUG === 'true') {
  module.exports = signature('cond :: Function -> Any -> Any')(cond)
}
