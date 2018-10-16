const tap = require('../function/tap')

const log = tap(x => console.log(x)) // eslint-disable-line no-console

module.exports = log
