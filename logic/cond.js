const maybeExec = require('../_internal/maybeExec')
const is = require('../type/is')

const isFunction = is(Function)

const isPass = (test, value) => (isFunction(test) ? test(value) : test === value)

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
