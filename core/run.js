
const error = require('../console/error')

const run = ({ dependencies, state, main }) => (dependencies != null
  ? run({ state, main: main(dependencies) })
  : main(state).catch((dependencies || {}).error || error))

module.exports = run
