/* eslint-disable */
const error = require('../console/error')

const run = ({ dependencies, state, main }) =>
  dependencies != null // eslint-disable-line no-ternary
    ? run ({ state, main: main (dependencies) })
    : main (state).catch ((dependencies || {}).error || error)

module.exports = run
