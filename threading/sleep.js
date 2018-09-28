/* eslint-disable */
const sleep = milliseconds => value => new Promise (
  resolve => setTimeout(() => resolve(value), milliseconds)
)

module.exports = sleep
