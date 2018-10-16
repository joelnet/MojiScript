/* eslint-disable  */
const is = ctor => value =>
  ctor === Function ? typeof value === 'function'
  : value != null && typeof ctor === 'function' && typeof ctor['@@type'] == 'symbol' ? ctor['@@type'] === value['@@type']
  : value != null && is(Function)(value.then) ? true
  : value != null && value.constructor === ctor || value instanceof ctor

module.exports = is
