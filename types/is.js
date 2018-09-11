const is = ctor => value =>
  value != null && value.constructor === ctor || value instanceof ctor;

module.exports = is
