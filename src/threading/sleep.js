const sleep = timeout => value => new Promise(resolve => {
  setTimeout(() => resolve(value), timeout)
})

module.exports = sleep
