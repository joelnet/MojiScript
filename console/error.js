const tap = require('../function/tap')

const error = tap(x => console.error(x)) // eslint-disable-line no-console

module.exports = error
