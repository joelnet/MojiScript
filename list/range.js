const range = start => function* range(end) {
  let current = start
  while (current < end) yield current++
}

module.exports = range
