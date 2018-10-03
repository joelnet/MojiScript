/* eslint-disable */
const getPath = require('./getPath')

const get = prop => obj => getPath ([ prop ]) (obj)

module.exports = get