const ifElse = condition => onTrue => onFalse => value => (condition(value) ? onTrue : onFalse)(value)

module.exports = ifElse
