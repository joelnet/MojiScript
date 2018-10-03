/* eslint-disable */
const is = require('../types/is')

const isObject = is (Object)

const _getReducer = (cur, k) => isObject (cur) ? cur[k] : cur

const getPath = path => obj => {
  const value = Array.isArray(path) && path.length > 0 ? path.reduce(_getReducer, obj) : null
  return value != null ? value : null
}

module.exports = getPath
