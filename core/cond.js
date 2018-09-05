const maybeExec = require('../internal/maybeExec')
const isFunction = require('../is/isFunction')

const isPass = (test, value) =>
  isFunction(test) ? test(value) : test === value

const cond = xs => value => {
  for (let i = 0; i < xs.length; i++) {
    const [test, result] = xs[i]
    const pass = isFunction(test) ? test(value) : test === value
    if (isPass(test, value)) {
      return maybeExec(result)(value)
    }
  }

  return null
}

module.exports = cond
