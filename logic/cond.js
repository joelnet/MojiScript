/* eslint-disable */
const maybeExec = require('../internal/maybeExec')
const is = require('../type/is')

const isFunction = is (Function)

const isPass = (test, value) =>
  isFunction (test) ? test (value) : test === value // eslint-disable-line no-ternary

const cond = xs => value => { // eslint-disable-line arrow-body-style
  for (const x of xs) {
    const [ test, result ] = x

    if (isPass (test, value)) {
      return maybeExec (result) (value)
    }
  }

  return null
}

module.exports = cond
