/* eslint-disable */
const is = ctor => value =>
  ctor === Function
    ? typeof value === 'function'
    : value != null && value.constructor === ctor || value instanceof ctor

module.exports = is
