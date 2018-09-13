const maybeExec = require ('../internal/maybeExec')
const is = require ('../types/is')

const isFunction = is (Function)

const isPass = (test, value) =>
  isFunction (test) ? test (value) : test === value // eslint-disable-line no-ternary

const cond = xs => value => { // eslint-disable-line arrow-body-style
  for (let i = 0; i < xs.length; i++) {
    const [ test, result ] = xs[i]

    if (isPass (test, value)) {
      return maybeExec (result) (value)
    }
  }

  return null
}

module.exports = cond
