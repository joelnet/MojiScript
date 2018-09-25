/* eslint-disable */
const serialReduce = (func, init, xs, i = 0, promise = Promise.resolve(init)) =>
  i >= xs.length
    ? promise
    : serialReduce(
      func,
      init,
      xs,
      i + 1,
      promise.then(acc => func(acc, xs[i]))
    )

module.exports = serialReduce
