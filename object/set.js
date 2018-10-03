/* eslint-disable */
const clone = require('./clone')

const set = key => value => obj => {
	const cloned = clone(obj)
	cloned[key] = value
	return cloned
}

module.exports = set