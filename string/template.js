/*
 * code adapted from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

const template = (strings, ...keys) => (...values) => {
  const dict = values[0] || {}
  const result = [ strings[0] ]
  keys.forEach ((key, i) => {
    const value = Number.isInteger (key) ? values[key] : dict[key]
    result.push (value, strings[i + 1])
  })
  return result.join ('')
}

module.exports = template
