const ifElse = condition => onTrue => onFalse => value =>
  (condition (value) ? onTrue : onFalse) (value) // eslint-disable-line no-ternary

module.exports = ifElse
