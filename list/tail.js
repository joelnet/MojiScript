/* eslint-disable */
const tail = iterable => {
	if (iterable instanceof Array) {
		return iterable.slice(1)
	} else if (iterable && iterable.next) {
		const [ head, ...rest ] = iterable
		return rest
	}

	return new Error(`type ${typeof iterable} not supported`)
}

module.exports = tail