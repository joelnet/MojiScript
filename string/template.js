/*
 * code adapted from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

const template = (strings, ...keys) => (...values) => { // eslint-disable-line arrow-body-style
  const dict = values[0] || {}
  const result = [ strings[0] ]
  keys.forEach ((key, i) => { // eslint-disable-line arrow-body-style
    const value = Number.isInteger (key) ? values[key] : dict[key] // eslint-disable-line no-ternary
    result.push (value, strings[i + 1])
  })
  return result.join ('')
}

module.exports = template
