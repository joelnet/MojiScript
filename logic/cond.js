const maybeExec = require('../_internal/maybeExec')
const is = require('../type/is')

const isFunction = is(Function)

const isPass = (test, value) => (isFunction(test) ? test(value) : test === value)

const cond = pairs => (value) => {
  /* eslint-disable no-restricted-syntax */
  for (const pair of pairs) {
    const [ predicate, transformer ] = pair

    if (isPass(predicate, value)) {
      return maybeExec(transformer)(value)
    }
  }

  return null
}

module.exports = cond
