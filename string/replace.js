const replace = pattern => replacement => string =>
  string.replace (pattern, replacement)

module.exports = replace
