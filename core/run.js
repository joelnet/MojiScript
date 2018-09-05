const error = require('../console/error')

const run = ({ dependencies, options, main }) =>
  dependencies != null
    ? run({ options, main: main(dependencies) })
    : main(options || null).catch((dependencies || {}).error || error)

module.exports = run
