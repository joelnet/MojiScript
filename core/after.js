const after = first => last => value =>
  Promise.resolve (first (value)).then (() => last (value))

module.exports = after
