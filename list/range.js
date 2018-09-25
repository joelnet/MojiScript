/* eslint-disable */
const range = (start) => function* (end) {
  let current = start
  while (current < end) yield current++
}

module.exports = range
