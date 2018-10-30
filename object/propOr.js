const pathOr = require('./pathOr')

const propOr = fallback => prop => o => pathOr(fallback)([ prop ])(o)

module.exports = propOr
