
const maybeExec = require('../_internal/maybeExec')
const is = require('../type/is')

const isFunction = is (Function)

const isPass = (test, value) =>
  isFunction (test) ? test (value) : test === value // eslint-disable-line no-ternary

const cond = pairs => value => { // eslint-disable-line arrow-body-style
  for (const pair of pairs) {
    const [ predicate, transformer ] = pair

    if (isPass (predicate, value)) {
      return maybeExec (transformer) (value)
    }
  }

  return null
}

module.exports = cond
