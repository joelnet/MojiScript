const run = ({ dependencies, options, main }) =>
  dependencies != null
    ? run({ options, main: main(dependencies) })
    : main(options || null)

module.exports = run
