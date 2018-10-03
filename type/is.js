/* eslint-disable */
const is = ctor => value =>
  ctor === Function ? typeof value === 'function'
  : value != null && is (Function) (value.then) ? true
  : value != null && value.constructor === ctor || value instanceof ctor

module.exports = is
