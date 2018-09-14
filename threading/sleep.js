const timeout = require ('../internal/timeout')

const sleep = milliseconds => value => new Promise (
  resolve => timeout (() => resolve (value)) (milliseconds)
)

module.exports = sleep
