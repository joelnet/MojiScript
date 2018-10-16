const tap = require('../function/tap')

const logF = func => tap(x => console.log(func(x))) // eslint-disable-line no-console

module.exports = logF
