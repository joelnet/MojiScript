// into :: String -> Function -> * -> *
const into = key => func => value =>
  Promise.resolve (value)
    .then (func)
    .then (result => Object.assign({}, value, { [key]: result }))

module.exports = into
