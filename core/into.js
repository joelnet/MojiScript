// into :: String -> Function -> * -> *
const into = prop => func => value => Promise.resolve(value)
  .then(func)
  .then(result => Object.assign({}, value, { [prop]: result }))

module.exports = into
