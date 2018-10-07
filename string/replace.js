/* eslint-disable */
const escapeRegExp = require('../_internal/escapeRegExp')

const replace = pattern => replacement => string =>
  string.replace (new RegExp (escapeRegExp (pattern), 'g'), replacement)

module.exports = replace
